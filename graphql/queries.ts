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
