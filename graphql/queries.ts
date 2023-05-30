import { gql } from "@apollo/client";

export const GET_NOVELS = gql`
  query Novels {
    novels {
      id
      title
      image
      createdAt
      updatedAt
      authors {
        id
        name
        novelId
      }
    }
  }
`;
export const INSERT_SEARCH = gql`
  mutation InsertSearch ($userId: String!, $searchCode: String, $searchString: String){
    insertSearch(userId: $userId, searchCode: $searchCode, searchString: $searchString) {
      id
      userId
      searchCode
      searchString
    }
  }
`;
export const GET_SEARCHES = gql`
  query Searches ($userId: String!) {
    searches(userId: $userId) {
      id
      userId
      searchCode
      searchString
      createdAt
    }
  }
`
