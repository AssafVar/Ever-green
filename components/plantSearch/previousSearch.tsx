import React, { useEffect, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_USER_SEARCHES } from "@/graphql/queries";
import { format } from "date-fns";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const SearchText = styled(Typography)`
  flex: 1;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;

const DateText = styled(Typography)`
  font-size: 12px;
  color: #888888;
`;

const NoSearchesText = styled(Typography)`
  margin-top: 10px;
`;

type PreviousSearchProps = {
  updateSearch: (searchString: string) => void;
};

const PreviousSearch = ({ updateSearch }: PreviousSearchProps) => {
  const [searchList, setSearchList] = useState([]);
  const { loading, error, data } = useQuery(GET_USER_SEARCHES, {
    variables: {
      userId: "12",
    },
  });

  const deleteSearch = async (id: string) => {
    // Delete the search with the specified ID
  };

  useEffect(() => {
    if (data) {
      setSearchList(data?.userSearches);
    }
  }, [data]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Previous Searches:
      </Typography>
      <QueryResult loading={loading} error={error} data={data}>
        {searchList && searchList.length ? (
          searchList.map((item: { id: string; searchString: string; createdAt: string }) => (
            <SearchItem key={item.id} onClick={() => updateSearch(item.searchString)}>
              <Box display="flex" alignItems="center">
                <SearchText variant="subtitle1" title={item.searchString}>
                  {item.searchString}
                </SearchText>
                <DateText variant="subtitle2" sx={{ fontSize: "10px" }}>
                  {format(new Date(+item?.createdAt), "dd/MM")}
                </DateText>
              </Box>
              <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={() => deleteSearch(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </SearchItem>
          ))
        ) : (
          <NoSearchesText>No previous searches found</NoSearchesText>
        )}
      </QueryResult>
    </Box>
  );
};

export default PreviousSearch;
