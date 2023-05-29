import React from 'react';
import { Typography } from "@mui/material";

const PreviousSearch = ({createNewSearch}:any) => {
  const searchList = [
    {name: "1", value: "1", id: "1",},
    {name: "2", value: "2", id: "2",},
    {name: "3", value: "3", id: "3",},
  ];

  return (
    <div className="w-48 h-36 border-2 border-gray-400 rounded-lg">
      <Typography className="m-4">Previous Search:</Typography>
      {searchList.length && searchList.map(item=>(
        <div key={item.id} onClick={()=>createNewSearch(item)} >
            <Typography>{item.name}</Typography>
        </div>
      ))}
    </div>
  );
};
export default PreviousSearch;
