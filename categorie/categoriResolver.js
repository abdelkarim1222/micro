// CategoriSchema.js
const { buildSchema } = require('graphql');

// Créer un schéma GraphQL
const categoriSchema = buildSchema(`
    type Query {
        categori(id: Int!): Categori
        
    }
    type Mutation {
        addCategori(job: String!): Categori
        deleteCategori(id: Int!): Int
    }
    type Categori {
        id: Int
        job: String
        
        
    }
    type DeleteCategoriResponse {
        message: String
      }
`);
module.exports = categoriSchema;