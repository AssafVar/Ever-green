import React, { useEffect, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_SEARCHES } from "@/graphql/queries";
import { format } from "date-fns";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const TypographyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px;
`;

const LeftSideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  border: 1px solid rgb(203, 213, 225);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
`;

type PreviousSearchProps = {
  updateSearch: (searchString: string) => void;
};

const PreviousSearch = ({ updateSearch }: PreviousSearchProps) => {
  const [searchList, setSearchList] = useState([]);
  const { loading, error, data } = useQuery(GET_SEARCHES, {
    variables: {
      userId: "12",
    },
  });

  useEffect(() => {
    if (data) {
      setSearchList(data?.searches);
    }
  }, [data]);

  return (
    <LeftSideBox>
      <Typography className="m-4">Previous Search:</Typography>
      <QueryResult loading={loading} error={error} data={data}>
        {searchList && searchList.length ? (
          searchList.map((item: { id: string, searchString: string, createdAt: string }) => (
            <div
              className="flex justify-between self-stretch items-center"
              key={item.id}
              onClick={() => updateSearch(item.searchString)}
            >
              <TypographyBox>
                <Tooltip title="Search">
                  <Typography variant="subtitle1" className="cursor-pointer">
                    {item?.searchString}
                  </Typography>
                </Tooltip>
                <Typography variant="subtitle1" className="">
                  |
                </Typography>
                <Typography variant="subtitle2" className="">
                  {format(new Date(+item?.createdAt), "dd/MM")}
                </Typography>
              </TypographyBox>
              <Tooltip title="Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          ))
        ) : (
          <Typography>No previous searches found</Typography>
        )}
      </QueryResult>
    </LeftSideBox>
  );
};

export default PreviousSearch;
