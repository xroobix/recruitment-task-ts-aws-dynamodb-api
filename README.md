# Recruitment Task - AWS DynamoDB API with Node.js, Serverless Framework, and TypeScript

This repository contains the code for building an API on AWS using DynamoDB, Lambda functions, API Gateway, Node.js, and Swagger. The Serverless Framework is used to deploy the infrastructure, and TypeScript is used for type-safe development. Zod is utilized for input validation.

## Table of Contents

- [Recruitment Task - AWS DynamoDB API with Node.js, Serverless Framework, and TypeScript](#recruitment-task---aws-dynamodb-api-with-nodejs-serverless-framework-and-typescript)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies Used](#technologies-used)
  - [API Documentation](#api-documentation)
  - [Setup](#setup)
  - [Deployment](#deployment)
  - [Usage](#usage)

## Introduction

The purpose of this project is to demonstrate how to build a serverless API on AWS using the Serverless Framework and various AWS services, such as DynamoDB for data storage, Lambda functions for server-side logic, and API Gateway for API endpoints. The API is implemented in Node.js, and TypeScript is used to ensure type safety and better developer experience. Additionally, Zod is employed for validating API input data.

## Technologies Used

- Node.js: A JavaScript runtime for executing server-side code.
- Serverless Framework: A popular open-source framework for building and deploying serverless applications.
- AWS Services:
  - DynamoDB: A fully-managed NoSQL database service provided by AWS.
  - Lambda: A serverless compute service for running code without managing servers.
  - API Gateway: A fully managed service for creating, publishing, maintaining, monitoring, and securing APIs.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Zod: A TypeScript-first schema validation library.

## API Documentation

The API documentation is available on SwaggerHub. You can access it using the following link:

[Swagger Documentation](https://app.swaggerhub.com/apis/xroobix/recruitment-task-ts-aws-dynamodb-api/1.0.0)

The Swagger documentation provides detailed information about the API endpoints, request parameters, and response formats.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/xroobix/recruitment-task-ts-aws-dynamodb-api.git
```

2. Navigate to the project directory:

```bash
cd recruitment-task-ts-aws-dynamodb-api
```

3. Install the dependencies:

```bash
npm install
```

## Deployment

The Serverless Framework simplifies the deployment process. Before deploying, make sure you have the necessary AWS credentials set up on your local machine. You can do this by using the AWS CLI or configuring environment variables.

To deploy the API to AWS, execute the following command:

```bash
sls deploy
```

The Serverless Framework will automatically provision the required AWS resources and deploy the Lambda functions and API Gateway endpoints.

## Usage

Once the deployment is successful, you will receive the API endpoint URL. You can use tools like `curl`, Postman, or any other API client to interact with the API.

Remember to refer to the Swagger documentation for details on available endpoints and their respective request and response formats.
