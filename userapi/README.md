# DevOps Project README

## Table of Contents
1. [Web Application Development](#1-web-application-development)
2. [CI/CD Pipeline](#2-cicd-pipeline)
3. [Dockerization](#3-dockerization)
4. [Docker Compose Orchestration](#4-docker-compose-orchestration)
5. [Kubernetes Orchestration](#5-kubernetes-orchestration)
6. [How to Use This Project](#how-to-use-this-project)
7. [Additional Information](#additional-information)

## 1. Web Application Development
- **Programming Language and Framework:** NodeJS with Express
- **Database:** Redis
- **Tests:** Unit, API, configuration, connection tests

## 2. CI/CD Pipeline

| Aspect                   | Details                                 |
|--------------------------|-----------------------------------------|
| Platform                 | GitHub Actions                          |
| Deployment Platform      | Azure                                   |

- **Pipeline Steps:** 
  - Unit Tests
  - Build Docker Image
  - Push Docker Image to Docker Hub
  - Deploy to Azure Kubernetes Service (AKS)
  - Run API Tests

## 3. Dockerization
- **Dockerfile:** installation and launching of NODE
- **Docker Hub Repository:** [matheogonnet/devops-project-image](https://hub.docker.com/r/matheogonnet/devops-project-image)

## 4. Docker Compose Orchestration
- **docker-compose.yml:** Integration of Redis and orchestration of the app

## 5. Kubernetes Orchestration
- **Kubernetes Cluster:** Setup using Minikube
- **Manifest Files:** 
  - deployment.yaml for deploying the application with Docker
  - service.yaml for exposing the application as a service
  - pv.yaml for persistent volume of the application
  - pvc.yaml for claiming the persistent volume

## How to Use This Project

To deploy this project using the "Node.js | Redis CI/CD" automation in GitHub Actions:

1. **Navigate to GitHub Actions:** Go to the "Actions" tab of this repository.

2. **Select the Workflow:** Under the "Workflows" section, click on the "Node.js | Redis CI/CD" workflow.

3. **Run Workflow:** Click the "Run workflow" button to start the CI/CD process. 

4. **Monitor the Deployment:** You can monitor the progress and status of the CI/CD pipeline in the workflow execution logs.

5. **Access Your Deployed Application:** Once the CI/CD pipeline successfully completes, you can access your deployed Node.js application with Redis using the provided deployment platform (e.g., Azure).

By following these steps, you can easily deploy this project using the automation provided by the "Node.js | Redis CI/CD" workflow in GitHub Actions.

## Additional Information
- **Authors:** Mathéo GONNET and Gabriel HENAUX
- **Tools and Platforms Used:** Vscode, GitHub, Docker, Kubernetes, Stackoverflow, ChatGPT
