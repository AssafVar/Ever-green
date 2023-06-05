import React, { useState } from "react";
import PreviousSearch from "./previousSearch";
import SearchBar from "./searchBar";

interface SearchContainerProps {
    updateSearch: (value: string) => void;
    searchText: string;
  }

const SearchContainer:React.FC<SearchContainerProps> = ({updateSearch, searchText}) => {

    return (
        <>
            <SearchBar updateSearch={updateSearch} />
            <PreviousSearch updateSearch={updateSearch}/>
        </>
    );
}
export default SearchContainer;