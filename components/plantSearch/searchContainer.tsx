import React, { useState } from "react";
import PreviousSearch from "./previousSearch";
import SearchBar from "./searchBar";

interface SearchContainerProps {
    updateSearch: (value: string) => void;
    searchText: string;
  }

const SearchContainer:React.FC<SearchContainerProps> = ({updateSearch, searchText}) => {

    const [newSearchlist, setNewSearchList] = useState([]);
    const updateNewSearchList = (item:any) => {
        const newList = newSearchlist;
        console.log(item);
        
        setNewSearchList(item);
    }
    return (
        <>
            <SearchBar updateSearch={updateSearch} />
            <PreviousSearch updateSearch={updateSearch} newSearchlist={newSearchlist} updateNewSearchList={updateNewSearchList}/>
        </>
    );
}
export default SearchContainer;