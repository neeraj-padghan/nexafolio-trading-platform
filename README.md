# Nexafolio Trading Platform - Automated CI/CD Pipeline

An end-to-end automated CI/CD pipeline built for the **Nexafolio Trading Platform** web application as part of the Cloud Computing and DevOps course assignment[cite: 1]. The pipeline automates building, testing, containerizing, pushing to Amazon ECR, and deploying onto a Minikube Kubernetes cluster via Jenkins[cite: 1, 2].

---

## 🚀 Live Application Access
* **Deployed App URL:** `http://54.197.17.15:30080`

---

## 🛠️ Architecture & Tools Used
* **Version Control:** GitHub
* **Cloud Provider:** AWS EC2 (Amazon Linux 2023)
* **CI/CD Automation:** Jenkins (Declarative Pipeline via `Jenkinsfile`)[cite: 2]
* **Containerization:** Docker (Multi-stage build)[cite: 2]
* **Container Registry:** Amazon Elastic Container Registry (ECR)[cite: 2]
* **Orchestration:** Minikube & `kubectl`[cite: 2]

---

## 🔄 Pipeline Stages

1. **Checkout SCM:** Jenkins pulls the latest source code from the GitHub repository[cite: 1, 2].
2. **Build and Test:** Installs Node.js dependencies and executes Jest unit tests (`npm test`) with `@testing-library/jest-dom` matchers[cite: 2].
3. **Docker Build:** Builds an optimized production React build and packages it into a lightweight Nginx container image using the `Dockerfile`[cite: 2].
4. **Push to ECR:** Authenticates with AWS ECR and pushes the tagged container image securely using credentials stored in Jenkins.
5. **Deploy to Kubernetes:** Applies the Kubernetes Deployment (`k8s/deployment.yaml`) and Service (`k8s/service.yaml`) manifests to Minikube, pulling the latest ECR image[cite: 2, 4].
6. **Verification:** Validates running pods, deployment health status, and external accessibility[cite: 2, 4].

---

## 📂 Repository Structure
```text
├── src/                  # React application source code & test suites
├── public/               # Public static assets
├── k8s/                  # Kubernetes manifest files
│   ├── deployment.yaml   # Deployment config (2 replicas, image pull secret)
│   └── service.yaml      # NodePort service configuration (Port 30080)
├── Dockerfile            # Multi-stage production Dockerfile (Node.js & Nginx)
├── Jenkinsfile           # Declarative CI/CD pipeline definition
└── package.json          # Project dependencies and scripts
