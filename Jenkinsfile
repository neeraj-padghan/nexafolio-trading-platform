pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {

        AWS_REGION = 'us-east-1'
        AWS_ACCOUNT_ID = '012994659515'

        ECR_REPOSITORY = 'nexafolio-platform'

        IMAGE_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}"

        K8S_DEPLOYMENT = 'nexafolio-deployment'
        K8S_SERVICE = 'nexafolio-service'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                sh 'npm install'
                sh 'CI=true npm test -- --watchAll=false --passWithNoTests'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh """
                docker build \
                -t ${IMAGE_URI}:${BUILD_NUMBER} \
                -t ${IMAGE_URI}:latest .
                """
            }
        }

        stage('Push to ECR') {
            steps {
                sh """
                aws ecr get-login-password --region ${AWS_REGION} \
                | docker login \
                --username AWS \
                --password-stdin \
                ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

                docker push ${IMAGE_URI}:${BUILD_NUMBER}
                docker push ${IMAGE_URI}:latest
                """
            }
        }


        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml

                kubectl rollout status deployment/nexafolio-deployment
                '''
            }
        }

        stage('Verification') {
            steps {
                sh '''
                kubectl get deployments
                kubectl get pods
                kubectl get svc
                '''
            }
        }
    }
}