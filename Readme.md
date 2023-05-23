Job Management
GraphQL Endpoint
You can access the GraphQL endpoint for job management at http://localhost:5000/graphql. This endpoint allows you to perform complex queries and mutations to manage job data. The GraphQL Playground (GraphiQL) is enabled for easy testing and exploration.

RESTful Endpoints
The API also exposes RESTful endpoints for basic CRUD operations on jobs. The available endpoints are as follows:

GET /jobs: Retrieve all jobs.
GET /job/:id: Retrieve a specific job by its ID.
POST /job: Create a new job. The job details should be provided in the request body as JSON.
PUT /job/:id: Update an existing job by its ID. The updated job details should be provided in the request body as JSON.
DELETE /job/:id: Delete a job by its ID.
Categori Management
GraphQL Endpoint
You can access the GraphQL endpoint for categori management at http://localhost:5001/graphql. This endpoint allows you to perform complex queries and mutations to manage categori data. The GraphQL Playground (GraphiQL) is enabled for easy testing and exploration.

RESTful Endpoints
The API also exposes RESTful endpoints for basic CRUD operations on categoris. The available endpoints are as follows:

GET /categoris: Retrieve all categoris.
GET /categori/:id: Retrieve a specific categori by its ID.
POST /categori: Create a new categori. The categori details should be provided in the request body as JSON.
PUT /categori/:id: Update an existing categori by its ID. The updated categori details should be provided in the request body as JSON.
DELETE /categori/:id: Delete a categori by its ID.
Note: For the POST and PUT requests, the job and categori details should include job and categorie properties respectively.

API Gateway
The API Gateway acts as a proxy server to route requests to the appropriate microservices based on specific routes. It uses http-proxy-middleware to handle the routing.

Configuration
The API Gateway is configured using the routes object in the index.js file. Each key-value pair in the routes object represents a route and




