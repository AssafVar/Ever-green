import React, { useEffect, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_SEARCHES } from "@/graphql/queries";
import { format } from "date-fns";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const PreviousSearch = ({ createNewSearch }: any) => {
  const [searchList, setSearchList] = useState([]);
  const { loading, error, data } = useQuery(GET_SEARCHES, {
    variables: {
      userId: "12",
    },
  });
  useEffect(() => {
    data && setSearchList(data?.searches);
  }, [data]);
  const TypegraphyBox = styled("div")({
    justifyContent: "space-between",
    display: "contents",
    paddingInline: "10px",
  });
  const LeftSideBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5px",
    border: "1px solid rgb(203 213 225)",
    borderRadius: "10px",
    paddingTop: "10px",
    marginInline: "10px",
    paddingInline: "20px",
  });

  return (
    <LeftSideBox>
      <Typography className="m-4">Previous Search:</Typography>
      <QueryResult loading={loading} error={error} data={data}>
        {searchList &&
          searchList.length ?
          searchList.map(
            (item: {
              id: string;
              searchString: string;
              createdAt: string;
              searchCode: string;
            }) => (
              <div
                className="flex justify-between self-stretch items-center"
                key={item.id}
                onClick={() => createNewSearch(item)}
              >
                <TypegraphyBox>
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
                </TypegraphyBox>
                <Tooltip title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </div>
            )
          ):<Typography>No previous searches found</Typography>}
      </QueryResult>
    </LeftSideBox>
  );
};
export default PreviousSearch;
