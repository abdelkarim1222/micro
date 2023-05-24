# Job and Categori Management API with API Gateway
This repository contains an API for managing jobs and categoris built with Express.js, GraphQL, and RESTful endpoints. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on job and categori data. Additionally, it includes an API Gateway built with Express.js and http-proxy-middleware to route requests to the appropriate microservices.

# Prerequisites
Before running the application, make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)
- SQLite (optional, if you want to use the provided database)
- Getting Started
- To get started with the Job and Categori Management API, follow the steps below:
    - Clone this repository to your local machine:

     ```bash
       git clone <repository_url>
     ```
  - Navigate to the project directory:
  ```bash
       cd job-and-categori-management-api
     ```

  - Install the dependencies:

   ``` bash
    npm install 
    ```
   - Start the microservice servers:

    ```bash
  npm run start:categoris
     ```
    - Start the API Gateway:

```bash
npm start
```
The API Gateway will start running on http://localhost:5003.

# Job Management
## GraphQL Endpoint
You can access the GraphQL endpoint for job management at http://localhost:5000/graphql. This endpoint allows you to perform complex queries and mutations to manage job data. The GraphQL Playground (GraphiQL) is enabled for easy testing and exploration.

## RESTful Endpoints
The API also exposes RESTful endpoints for basic CRUD operations on jobs. The available endpoints are as follows:

- GET /jobs: Retrieve all jobs.
- GET /job/:id: Retrieve a specific job by its ID.
- POST /job: Create a new job. The job details should be provided in the request body as JSON.
- PUT /job/:id: Update an existing job by its ID. The updated job details should be provided in the request body as JSON.
- DELETE /job/:id: Delete a job by its ID.
# Categori Management
## GraphQL Endpoint
You can access the GraphQL endpoint for categori management at http://localhost:5001/graphql. This endpoint allows you to perform complex queries and mutations to manage categori data. The GraphQL Playground (GraphiQL) is enabled for easy testing and exploration.

## RESTful Endpoints
The API also exposes RESTful endpoints for basic CRUD operations on categoris. The available endpoints are as follows:

- GET /categoris: Retrieve all categoris.
- GET /categori/:id: Retrieve a specific categori by its ID.
- POST /categori: Create a new categori. The categori details should be provided in the request body as JSON.
- PUT /categori/:id: Update an existing categori by its ID. The updated categori details should be provided in the request body as JSON.
- DELETE /categori/:id: Delete a categori by its ID.
- Note: For the POST and PUT requests, the job and categori details should include job and categorie properties respectively.

# API Gateway
The API Gateway acts as a proxy server to route requests to the appropriate microservices based on specific routes. It uses http-proxy-middleware to handle the routing.

# Configuration
The API Gateway is configured using the routes object in the index.js file. Each key-value pair in the routes
