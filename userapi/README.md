# DevOps Project README

## Table of Contents
1. [Web Application Development](#1-web-application-development)
2. [Using the User Management Interface](#2-using-the-user-management-interface)
3. [REST API Usage](#3-rest-api-usage)
4. [CI/CD Pipeline](#2-cicd-pipeline)
5. [Dockerization](#3-dockerization)
6. [Docker Compose Orchestration](#4-docker-compose-orchestration)
7. [Kubernetes Orchestration](#5-kubernetes-orchestration)
8. [How to Use This Project](#how-to-use-this-project)
9. [Additional Information](#additional-information)

## 1. Web Application Development
- **Programming Language and Framework:** NodeJS with Express
- **Database:** Redis
- **Tests:** Unit, API, configuration, connection tests


## 2. REST API Usage
Our project includes a RESTful API for user management. Here's how to use it:

- **Base URL:** `http://localhost:3000`
- **Endpoints:**
  - `POST /user`: Create a new user. Requires a JSON payload with `username`, `firstname`, and `lastname`.
  - `GET /user/:username`: Retrieve details of a user by their username.
  - `PUT /user/:username`: Update details of an existing user. The JSON payload can include `newUsername`, `firstname`, and/or `lastname`.
  - `DELETE /user/:username`: Delete a user by their username.

- **Using the API:**
  - Use HTTP clients like Postman or command-line tools like curl to send requests to these endpoints.
  - Ensure to set the `Content-Type` header to `application/json` for requests that require a payload.
  - Interpret HTTP response codes and payloads to understand the outcome of your requests.
  - You can also access directly the [User Management](#2-using-the-user-management-interface) page to use the REST API with all the CRUD methods.


## 3. Using the User Management Interface
To manage users through the web interface (use the REST API directly from the web interface):

- **Access the Interface:** Open the website and navigate to the 'User Management' tab.
- **Create a User:** 
  - Fill out the 'Create User' form with the user's username, first name, and last name.
  - Click the 'Create' button to add the new user.
- **Search for a User:** 
  - Enter a username in the 'Get User' form.
  - Click the 'Search' button to retrieve and display the user's details.
- **Update User Information:** 
  - In the 'Update User' form, enter the old username and the new details (new username, first name, last name).
  - Click 'Update' to apply the changes.
- **Delete a User:** 
  - Enter the username in the 'Delete User' form.
  - Click the 'Delete' button to remove the user from the system.


## 4. CI/CD Pipeline

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

## 5. Dockerization
- **Dockerfile:** installation and launching of NODE
- **Docker Hub Repository:** [matheogonnet/devops-project-image](https://hub.docker.com/r/matheogonnet/devops-project-image)

## 6. Docker Compose Orchestration
- **docker-compose.yml:** Integration of Redis and orchestration of the app

## 7. Kubernetes Orchestration
- **Kubernetes Cluster:** Setup using Minikube
- **Manifest Files:** 
  - deployment.yaml for deploying the application with Docker
  - service.yaml for exposing the application as a service
  - pv.yaml for persistent volume of the application
  - pvc.yaml for claiming the persistent volume

## 8. How to Use This Project

To deploy this project using the "Node.js | Redis CI/CD" automation in GitHub Actions:

1. **Navigate to GitHub Actions:** Go to the "Actions" tab of this repository.

2. **Select the Workflow:** Under the "Workflows" section, click on the "Node.js | Redis CI/CD" workflow.

3. **Run Workflow:** Click the "Run workflow" button to start the CI/CD process. 

4. **Monitor the Deployment:** You can monitor the progress and status of the CI/CD pipeline in the workflow execution logs.

5. **Access Your Deployed Application:** Once the CI/CD pipeline successfully completes, you can access your deployed Node.js application with Redis using the provided deployment platform (e.g., Azure).

By following these steps, you can easily deploy this project using the automation provided by the "Node.js | Redis CI/CD" workflow in GitHub Actions.

## 9. Additional Information
- **Authors:** Mathéo GONNET and Gabriel HENAUX
- **Tools and Platforms Used:** Vscode, GitHub, Docker, Kubernetes, Stackoverflow, ChatGPT
