# DevOps Course Repository at ECE Paris

## Table of Contents
1. [Introduction](#introduction)
2. [Repository Structure](#repository-structure)
3. [Labs](#labs)
4. [UserAPI Project](#userapi-project)
5. [CI/CD Workflow](#cicd-workflow)
6. [Getting Started](#getting-started)
7. [Contribution Guidelines](#contribution-guidelines)
8. [Contact and Support](#contact-and-support)

## Introduction
Welcome to the DevOps Course Repository for ECE Paris. This repository contains all the necessary materials, labs, and projects related to the DevOps course. 

## Repository Structure
The repository is organized into the following main directories:

- **Labs:** Contains all lab exercises provided throughout the course.
- **UserAPI:** The main project for the course, implementing a user management API.
- **.github:** Contains GitHub Actions workflows for Continuous Integration and Continuous Deployment (CI/CD) of the UserAPI project.

## Labs
The `Labs` directory includes a series of practical exercises that cover various aspects of DevOps, such as:

- Version Control with Git
- Automation Scripts
- Containerization with Docker
- Orchestration with Kubernetes
- Continuous Integration and Continuous Deployment

Each lab is self-contained and comes with its instructions and necessary resources.

## UserAPI Project
The `UserAPI` directory is the central project of this course. Key features of this project include:

- A RESTful API for managing user data.
- Integration with a Redis database for data storage.
- Dockerization for easy deployment and scaling.
- A comprehensive suite of unit and integration tests.

## CI/CD Workflow
The `.github` directory contains the CI/CD workflow definitions for GitHub Actions. The workflow automates the following tasks:

- Running tests on every push and pull request.
- Building and pushing Docker images to a registry.
- Deploying the application to a cloud platform.

## Getting Started
To get started with the repository:

1. Clone the repository to your local machine.
2. Navigate to the desired directory (`Labs` or `UserAPI`) for specific instructions.
3. Follow the `README.md` files in each directory for detailed guidelines.

## Contribution Guidelines
Contributions to this repository are welcome. Please adhere to the following guidelines:

- Create a new branch for each feature or fix.
- Ensure that your code adheres to the existing style conventions.
- Write meaningful commit messages.
- Create a pull request with a clear description of your changes.

## Contact and Support
For any questions or support regarding this repository, please contact the course instructor or TA. You can also raise an issue in this repository for specific problems or suggestions.

