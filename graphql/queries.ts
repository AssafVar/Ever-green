import { gql } from "@apollo/client";

export const INSERT_SEARCH = gql`
  mutation InsertSearch ($id:String, $userId: String!, $searchCode: String, $searchString: String, $createdAt: String){
    insertSearch(id:$id, userId: $userId, searchCode: $searchCode, searchString: $searchString, createdAt: $createdAt) {
      id
      userId
      searchCode
      searchString
      createdAt
    }
  }
`;
export const GET_USER_SEARCHES = gql`
  query userSearches ($userId: String!) {
    userSearches(userId: $userId) {
      id
      userId
      searchCode
      searchString
      createdAt
    }
  }
`

export const DELETE_SINGLE_SEARCH = gql`
  mutation DeleteSingleSearch($id: ID!) {
    deleteSingleSearch(id: $id) {
      id
      userId
      searchCode
      searchString
      createdAt
    }
  }
`
export const DELETE_ALL_SEARCH = gql`
  mutation DeleteAllSearch($userId: String!) {
    deleteAllSearch(userId: $userId) {
      id
      userId
      searchCode
      searchString
      createdAt
    }
  }
`
export const INSERT_USER = gql`
  mutation InsertUser($firstName: String, $lastName: String, $password: String, $email: String, $role: String) {
    insertUser(firstName: $firstName, lastName: $lastName, password: $password, email: $email, role: $role) {
      status
    }
  }
`

export const GET_USER_LOGIN = gql`
query loginUser($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    token
    user {
      id
      firstName
      lastName
      email
      password
      role
      createdAt
    }
  }
}
`
