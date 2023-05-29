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
  }
  type Novel {
    id: ID!
    title: String
    image: String
    createdAt: String 
    updatedAt: String
    authors: [Author]
  }
  type Author {
    id: ID!
    name:String
    novelId: String
  }
  
  type Query {
    novels: [Novel]
    novel(id:ID!): Novel
    users: [User]
    user(id:ID!): User
    searches(userId:String!): [Search]
  }
  type Mutation {
    addNovel (image: String, title: String): Novel
    updateNovel (id:ID!, title: String, image: String): Novel
    deleteNovel (id:ID!): Novel
    addAuthor (novelId:String, name:String): Author
    deleteAuthor (id:ID!) : Author
    addUser (firstName:String, lastName:String, password:String, email:String, role:String) : User
    updateUser (id:ID!, firstName:String, lastName:String, email:String, role:String) : User
    deleteUser (id:ID!) : User
    insertSearch (userId:String, searchCode:String, searchString:String) : Search
    deleteSearch (id:ID!) : Search
  }
`;