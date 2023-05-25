"use client";

import { INovel } from "@/typings";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_NOVELS } from "../../graphql/queries";
import QueryResult from "../query-result";


function Novels() {
  
    const { loading, error, data } = useQuery(GET_NOVELS);
    const novels: INovel[] = data?.novels;
    console.log(novels)
  return (
    <QueryResult loading={loading} error={error} data={data}>
      <div>
        <ul>
        {novels && novels.map((novel) =>(
        <li key={novel?.id}>
            {novel.title}
        </li>
            ))}
        </ul>
      </div>
    </QueryResult>
  );
}

export default Novels;
