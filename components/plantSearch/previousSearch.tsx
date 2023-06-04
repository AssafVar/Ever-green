import React, { useEffect, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_USER_SEARCHES } from "@/graphql/queries";
import { format } from "date-fns";
import styled from "@emotion/styled";
import SearchTextLine from "./searchTextLine";



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

        {searchList
          ?
          searchList.map((searchItem:{ id: string; searchString: string; createdAt: string })=>
            <div  key={searchItem?.id}>
              <SearchTextLine searchItem={searchItem} updateSearch={updateSearch} />
            </div>
          )
          :
          <NoSearchesText>No previous searches found</NoSearchesText>
        }
      </QueryResult>
    </Box>
  );
};

export default PreviousSearch;
