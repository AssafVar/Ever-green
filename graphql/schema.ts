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
  type Mutation {
    addUser (firstName:String, lastName:String, password:String, email:String, role:String) : User
    updateUser (id:ID!, firstName:String, lastName:String, email:String, role:String) : User
    deleteUser (id:ID!) : User
    insertSearch (userId:String, searchCode:String, searchString:String) : Search
    deleteSingleSearch (id:ID!) : Search
    deleteAllSearch (userId:String!) : [Search]
  }
`;