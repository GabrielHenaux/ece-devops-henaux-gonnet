**DevOps Project README**


## 1. Web Application Development
- **Programming Language and Framework:** NodeJS with Express
- **Database:** Redis
- **Tests:** Unit, API, configuration, connection tests

## 2. CI/CD Pipeline
- **Platform:** GitHub Actions
- **Deployment Platform:** Azure
- **Pipeline Steps:** 
  - Unit Tests
  - Build Docker Image
  - Push Docker Image to Docker Hub
  - Deploy to Azure Kubernetes Service (AKS)
  - Run API Tests

## 3. Dockerization
- **Dockerfile:** installation and lauching of NODE
- **Docker Hub Repository:** TODO:Provide a link to the Docker Hub repository

## 4. Docker Compose Orchestration
- **docker-compose.yml:** Integaration of redis and orchestration of the app

## 5. Kubernetes Orchestration
- **Kubernetes Cluster:** Setup using Minikube
- **Manifest Files:** 
- deployment.yaml for deploying the application in with Docker
- service.yaml for exposing the application as a service
- pv.yaml for persistent volume of the application
- pvc.yaml for claiming the persistent volume


## Additional Information
- **Authors:** Mathéo GONNET and Gabriel HENAUX
- **Tools and Platforms Used:** Vscode, GitHub, Docker, Kubernetes, Stackoverflow, ChatGPT

## How to Use This Project
Lauch the automation file on github actions


