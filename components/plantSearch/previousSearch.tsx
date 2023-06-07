import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, Select, Tooltip } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_USER_SEARCHES } from "@/graphql/queries";
import SearchTextLine from "./searchTextLine";
import { NoSearchesText } from "./styles";
import { Search } from "@/typings";
import MenuIcon from "@mui/icons-material/Menu";


type PreviousSearchProps = {
  updateSearch: (text: string) => void;
  newSearchlist: any[];
  updateNewSearchList: (item: any) => void;
  updateSearchList: (item: string | Search, action: string) => void,
  isUnder600px: boolean,
};

const PreviousSearch = ({ updateSearch, updateNewSearchList, newSearchlist, updateSearchList, isUnder600px }: PreviousSearchProps) => {

  const { loading, error, data } = useQuery(GET_USER_SEARCHES, {
    variables: {
      userId: "12",
    },
  });


  useEffect(() => {
    data && updateNewSearchList(data?.userSearches);
  }, [data]);

  return (
    <div>
      {isUnder600px ? (
        // Render the dropdown when window width is under 400px
        <div className="dropdown mt-5">
          <div className="dropdown-content">
            <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
              <QueryResult
                loading={loading}
                error={error}
                data={data}
              >
                <FormControl>
                  <InputLabel id="select-search"></InputLabel>
                  <Tooltip title="Previous search" placement="top">
                    <Select
                      labelId="select-search"
                      id="select-search"
                      value=""
                      sx={{
                        "& fieldset": { border: "none" },
                      }}
                      IconComponent={MenuIcon}
                    >
                      {!!newSearchlist && newSearchlist.length > 0 ? (
                        newSearchlist.map((searchItem: Search) => {
                          return (
                            <SearchTextLine
                              searchItem={searchItem}
                              updateSearch={updateSearch}
                              updateSearchList={updateSearchList}
                            />
                          )
                        })
                      ) : (
                        <NoSearchesText>No previous searches found</NoSearchesText>
                      )}
                    </Select>
                  </Tooltip>
                </FormControl>
              </QueryResult>
            </Box>
          </div>
        </div>
      ) : (
        // Render the regular Box when window width is 400px or more
        <Box>
          <h5 className="text-2xl font-bold my-4 text-primary">
            Previous Search:
          </h5>
          <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
            <QueryResult
              loading={loading}
              error={error}
              data={data}
            >
              {!!newSearchlist && newSearchlist.length > 0 ? (
                newSearchlist.map((searchItem: Search) => (
                  <div key={searchItem?.id}>
                    <SearchTextLine
                      searchItem={searchItem}
                      updateSearch={updateSearch}
                      updateSearchList={updateSearchList}
                    />
                  </div>
                ))
              ) : (
                <NoSearchesText>No previous searches found</NoSearchesText>
              )}
            </QueryResult>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default PreviousSearch;
