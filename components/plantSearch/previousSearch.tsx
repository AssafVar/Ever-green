import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_USER_SEARCHES } from "@/graphql/queries";
import SearchTextLine from "./searchTextLine";
import { NoSearchesText } from "./styles";





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

        {!!searchList && searchList.length>0
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
