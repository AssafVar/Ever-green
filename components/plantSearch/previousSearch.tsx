import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_USER_SEARCHES } from "@/graphql/queries";
import SearchTextLine from "./searchTextLine";
import { NoSearchesText } from "./styles";
import { Search } from "@/typings";

type PreviousSearchProps = {
  updateSearch: (text: string) => void;
  newSearchlist: any[];
  updateNewSearchList: (item: any) => void;
  updateSearchList: (item: string | Search, action: string) => void,
};

const PreviousSearch = ({ updateSearch, updateNewSearchList, newSearchlist, updateSearchList }: PreviousSearchProps) => {

  const { loading, error, data } = useQuery(GET_USER_SEARCHES, {
    variables: {
      userId: "12",
    },
  });

  useEffect(() => {
    console.log("rendering previous search");
    if (data) {
      updateNewSearchList(data?.userSearches);
    }
  }, [data]);

  console.log("newSearchlist", newSearchlist);

  return (
    <div>
      <h5 className="text-2xl font-bold my-4 text-primary">
        Previous Search:
      </h5>
      <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
        <QueryResult loading={loading} error={error} data={data}>
          {!!newSearchlist && newSearchlist.length > 0 ? (
            newSearchlist.map((searchItem: Search) => (
              <div key={searchItem?.id}>
                <SearchTextLine searchItem={searchItem} updateSearch={updateSearch} updateSearchList={updateSearchList} />
              </div>
            ))
          ) : (
            <NoSearchesText>No previous searches found</NoSearchesText>
          )}
        </QueryResult>
      </Box>
    </div>
  );
};

export default PreviousSearch;
