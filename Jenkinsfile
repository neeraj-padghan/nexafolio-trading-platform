pipeline {
    agent any

    environment {
        // ==========================================================
        // Docker Hub Registry Configuration
        // Replace 'neerajpadghan' with your Docker Hub username
        // ==========================================================
        DOCKER_HUB_USER    = 'neerajpadghan'
        IMAGE_NAME         = 'zerodha-landing-page'
        DOCKER_IMAGE       = "${DOCKER_HUB_USER}/${IMAGE_NAME}"
        IMAGE_TAG          = "${BUILD_NUMBER}"
        
        // Jenkins Credentials Manager Secret ID for Docker Hub login
        DOCKER_CREDS_ID    = 'dockerhub-credentials'
        
        // Target Kubernetes Service details
        K8S_DEPLOYMENT     = 'zerodha-landing-deployment'
        K8S_SERVICE        = 'zerodha-landing-service'
        NODEPORT           = '30080'
    }

    options {
        timeout(time: 20, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '5'))
        timestamps()
    }

    stages {
        // ----------------------------------------------------------
        // Stage 1: Pull source code from GitHub
        // ----------------------------------------------------------
        stage('Source Checkout') {
            steps {
                echo "=== Stage 1: Pulling latest code from GitHub ==="
                checkout scm
                sh 'git log -1 --oneline || true'
            }
        }

        // ----------------------------------------------------------
        // Stage 2: Install dependencies, test, and build React app
        // ----------------------------------------------------------
        stage('Build and Test') {
            steps {
                echo "=== Stage 2: Building Application and Running Automated Tests ==="
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install --prefer-offline --no-audit'
                // Run automated unit/smoke tests non-interactively in CI mode
                sh 'CI=true npm test -- --watchAll=false --passWithNoTests'
                // Compile optimized production bundle
                sh 'npm run build'
                sh 'ls -lh build/'
            }
        }

        // ----------------------------------------------------------
        // Stage 3: Create Docker image using multi-stage Dockerfile
        // ----------------------------------------------------------
        stage('Docker Build') {
            steps {
                echo "=== Stage 3: Packaging Application into Docker Image ==="
                sh """
                    docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} -t ${DOCKER_IMAGE}:latest .
                    docker images | grep ${IMAGE_NAME} || true
                """
            }
        }

        // ----------------------------------------------------------
        // Stage 4: Push Docker image to Docker Hub
        // ----------------------------------------------------------
        stage('Push Image') {
            steps {
                echo "=== Stage 4: Authenticating & Pushing Image to Docker Hub ==="
                withCredentials([usernamePassword(
                    credentialsId: "${DOCKER_CREDS_ID}",
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                    sh """
                        docker push ${DOCKER_IMAGE}:${IMAGE_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }

        // ----------------------------------------------------------
        // Stage 5: Deploy application on Minikube using K8s manifests
        // ----------------------------------------------------------
        stage('Minikube Deployment') {
            steps {
                echo "=== Stage 5: Applying Kubernetes Manifests on Minikube ==="
                sh """
                    # Dynamically update container image tag in deployment manifest
                    sed -i "s|image: .*${IMAGE_NAME}:.*|image: ${DOCKER_IMAGE}:${IMAGE_TAG}|g" k8s/deployment.yaml
                    
                    # Apply Kubernetes Deployment & NodePort Service
                    kubectl apply -f k8s/deployment.yaml
                    kubectl apply -f k8s/service.yaml
                    
                    # Wait for Kubernetes rolling update to complete
                    kubectl rollout status deployment/${K8S_DEPLOYMENT} --timeout=120s
                """
            }
        }

        // ----------------------------------------------------------
        // Stage 6: Verify deployment health, pods, and service
        // ----------------------------------------------------------
        stage('Verification') {
            steps {
                echo "=== Stage 6: Verifying Deployment, Pods & Application Availability ==="
                sh """
                    echo "--- Kubernetes Deployments ---"
                    kubectl get deployments -l app=zerodha-landing-page
                    
                    echo "--- Kubernetes Pods ---"
                    kubectl get pods -l app=zerodha-landing-page -o wide
                    
                    echo "--- Kubernetes Services ---"
                    kubectl get svc ${K8S_SERVICE} -o wide
                    
                    echo "--- Checking Minikube NodePort Health Endpoint ---"
                    NODE_IP=\$(minikube ip 2>/dev/null || kubectl get nodes -o jsonpath='{.items[0].status.addresses[?(@.type=="InternalIP")].address}')
                    echo "Testing endpoint on http://\${NODE_IP}:${NODEPORT}/health"
                    curl -sS --retry 5 --retry-delay 3 http://\${NODE_IP}:${NODEPORT}/health || true
                    
                    echo "Testing landing homepage on http://\${NODE_IP}:${NODEPORT}/"
                    curl -I http://\${NODE_IP}:${NODEPORT}/ || true
                """
            }
        }
    }

    post {
        always {
            echo "Pipeline run completed."
            sh 'docker logout || true'
        }
        success {
            echo "🎉 CI/CD Pipeline successfully executed for Build #${BUILD_NUMBER}!"
            echo "Landing Page is running live on Minikube cluster (NodePort: ${NODEPORT})."
        }
        failure {
            echo "❌ Pipeline failed! Please inspect stage logs above."
        }
    }
}
