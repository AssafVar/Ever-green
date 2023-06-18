import { gql } from "@apollo/client";

export const INSERT_SEARCH = gql`
  mutation InsertSearch ($email:String, $searchCode: String, $searchString: String, $createdAt: String){
    insertSearch(email:$email, searchCode: $searchCode, searchString: $searchString, createdAt: $createdAt) {
      id
      userId
      searchCode
      searchString
      createdAt
    }
  }
`;
export const GET_USER_SEARCHES = gql`
  query UserSearches($email: String!) {
    userSearches(email: $email) {
      search {
        id
        userId
        searchCode
        searchString
        createdAt
      }
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
  mutation DeleteAllSearch($email: String!) {
    deleteAllSearch(email: $email) {
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
      firstName
      lastName
      email
    }
  }
}
`
