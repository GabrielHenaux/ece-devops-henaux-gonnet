# Lab 6: Docker Containers

## Authors
- Gabriel Henaux
- Matheo Gonnet

## Objective

In this lab, we aimed to deepen our understanding of Docker, a leading containerization platform. Through this exercise, we learned how to:

1. Install Docker
2. Create a Docker image from a Dockerfile
3. Run a Docker container with various options
4. Share a Docker container with others
5. Utilize Docker Compose to manage multi-container applications

## Requirements

- A computer running Windows, macOS, or Linux
- An internet connection

## Setup

1. We installed [Docker Desktop](https://www.docker.com/get-started) on our computers.
2. To confirm the installation, we ran the following command in a terminal:
   ```
   docker run hello-world
   ```
   This command downloads and runs the "hello-world" Docker image, verifying that Docker is correctly installed.

## Instructions

1. **Creating a Docker Image:**
   - We navigated to the `lab/hello-world-docker` directory.
   - We examined the `server.js`, `package.json`, and `Dockerfile` files to understand the structure of our application.
   - We created the Docker image by running:
     ```
     docker build -t my-docker-app .
     ```
   - We then confirmed that our Docker image was listed in the local Docker images:
     ```
     docker images
     ```

2. **Running a Docker Container:**
   - We ran the Docker container using:
     ```
     docker run -p 5000:8080 -d my-docker-app
     ```
   - We confirmed that the container was running:
     ```
     docker ps
     ```
   - We accessed the application in our web browser by visiting `http://localhost:5000`.
   - We viewed the container logs:
     ```
     docker logs <CONTAINER_ID>
     ```
   - Finally, we stopped the container:
     ```
     docker stop <CONTAINER_ID>
     ```

3. **Sharing Our Docker Container:**
   - We changed the message in the `server.js` file to make our application unique.
   - We then rebuilt the Docker container to include our changes.
   - We created an account on [Docker Hub](https://hub.docker.com/).
   - Next, we tagged our container:
     ```
     docker tag my-docker-app <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
     ```
   - We logged in to Docker Hub:
     ```
     docker login
     ```
   - We uploaded our Docker image to Docker Hub:
     ```
     docker push <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
     ```
   - Finally, we asked our classmates to retrieve and run our Docker container using:
     ```
     docker pull <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
     docker run -p 5000:8080 -d <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
     ```

4. **Managing Multi-Container Applications with Docker Compose:**
   - We ensured Docker Compose was installed on our machines.
   - We navigated to the `lab/hello-world-docker-compose` directory.
   - We examined the `dbClient.js`, `server.js`, `package.json`, and `Dockerfile` files to understand the structure of our multi-container application.
   - We built the Docker image for our application.
   - We filled in the missing part of the `docker-compose.yaml` file.
   - We started our containers with:
     ```
     docker-compose up
     ```
   - We accessed our application at `http://localhost:5000`.
   - To stop our containers, we pressed `CTRL+C`.
   - We then removed our containers with:
     ```
     docker-compose down
     ```
   - We restarted our containers and observed the changes in the counter.
   - We made the necessary changes to our Docker Compose file to ensure the counter retained its value when we recreated our containers.



By completing this lab, we have gained practical experience with Docker, which is an essential tool for any DevOps engineer. We have learned how to containerize applications, share them with others, and manage multi-container applications, all of which are crucial skills in today's software development landscape.