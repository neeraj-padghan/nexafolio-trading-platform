# Nexafolio — Zerodha Clone Landing Page

Production-ready frontend landing page for the Zerodha Clone (Nexafolio) application, equipped with automated testing, multi-stage Docker containerization, Kubernetes manifests, and a Jenkins CI/CD pipeline.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React 18, React Router v6
- **Server:** Nginx Alpine (multi-stage production container)
- **CI/CD:** Jenkins Declarative Pipeline (`Jenkinsfile`)
- **Orchestration:** Kubernetes (`k8s/deployment.yaml`, `k8s/service.yaml`)

---

## 🚀 Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Run locally in development mode (http://localhost:3000)
npm start

# Run automated tests
npm test -- --watchAll=false

# Build production bundle
npm run build
```

### Docker Container
```bash
# Build multi-stage Docker image
docker build -t zerodha-landing-page:latest .

# Run container on port 8080
docker run -d -p 8080:80 --name zerodha-landing zerodha-landing-page:latest

# Check health endpoint
curl http://localhost:8080/health
```

### Kubernetes Deployment
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```
