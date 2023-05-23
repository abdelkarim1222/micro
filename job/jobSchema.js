// jobSchema.js
const { buildSchema } = require('graphql');

// Créer un schéma GraphQL
const jobSchema = buildSchema(`
    type Query {
        job(id: Int!): Job
        jobs: [Job]
    }
    type Mutation {
        addJob(job: String!, categorie: String!): Job
        deleteJob(id: Int!): Int
    }
    type Job {
        id: Int
        job: String
        categorie: String
        
    }
    type DeleteJobResponse {
        message: String
      }
`);
module.exports = jobSchema;