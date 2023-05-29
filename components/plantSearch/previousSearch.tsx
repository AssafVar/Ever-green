import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import QueryResult from "../query-result";
import { GET_SEARCHES } from "@/graphql/queries";


const PreviousSearch = ({ createNewSearch }: any) => {
  const [searchList, setSearchList] = useState([]);
  const { loading, error, data } = useQuery(GET_SEARCHES, {
    variables: {
      userId: "12",
    },
  });

  useEffect(() =>{
    data && setSearchList(data?.searches);
  },[data]);
  return (
    <div className="w-48 h-36 border-2 border-gray-400 rounded-lg">
      <Typography className="m-4">Previous Search:</Typography>
      <QueryResult loading={loading} error={error} data={data}>
        {searchList && searchList.length &&
          searchList.map((item) => (
            <div key={item.id} onClick={() => createNewSearch(item)}>
              <Typography>{item?.searchString}</Typography>
            </div>
          ))}
      </QueryResult>
    </div>
  );
};
export default PreviousSearch;
