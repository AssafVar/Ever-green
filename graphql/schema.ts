export const typeDefs = `#graphql

  type User {
    id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
    role:String
    createdAt:String
    search: [Search]
  }

  type Search {
    id:ID!
    userId:String
    searchCode:String
    searchString:String
    createdAt:String
  }
  
  type Query {
    users: [User]
    user(id:ID!): User
    userSearches(userId:String!): [Search]
  }
  type Token {
    token:String
  }

  type Mutation {
    insertUser (firstName:String, lastName:String, password:String, email:String, role:String): Token
    updateUser (id:ID!, firstName:String, lastName:String, email:String, role:String) : User
    deleteUser (id:ID!) : User
    insertSearch (id:String, userId:String, searchCode:String, searchString:String, createdAt:String) : Search
    deleteSingleSearch (id:ID!) : Search
    deleteAllSearch (userId:String!) : [Search]
  }
`;