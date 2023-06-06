import React, { useEffect, useState } from "react";
import PreviousSearch from "./previousSearch";
import SearchBar from "./searchBar";
import { Search } from "@/typings";

interface SearchContainerProps {
    updateSearch: (text: string) => void;
    searchText: string;
  }

const SearchContainer:React.FC<SearchContainerProps> = ({updateSearch, searchText}) => {

    const [newSearchlist, setNewSearchList] = useState([]);
    const updateNewSearchList = (item:any) => {        
        setNewSearchList(item);
    }
    const updateSearchList = (item: Search|string, action: string) => {
        if (action === 'delete') {
          const newList = newSearchlist.filter((search:any) => {
            return search.id !== item
          });
          updateNewSearchList(newList);
        }else if (action === 'deleteAll'){
          const newList = newSearchlist.filter((search:any) => {
            return search.userId !== item
          });
          updateNewSearchList(newList);
        }else if( action === 'insert') {
          const newList = newSearchlist as Array <Search | any>;
          !!item && newList.push(item);
          typeof item !== 'string' && item?.searchString && updateSearch(item?.searchString)
          updateNewSearchList(newList);
        }
      }
      useEffect(()=>{
        updateSearchList(searchText, 'insert')
      },[])

    return (
        <>
            <SearchBar updateSearchList={updateSearchList}/>
            <PreviousSearch updateSearchList={updateSearchList} updateSearch={updateSearch} newSearchlist={newSearchlist} updateNewSearchList={updateNewSearchList}/>
        </>
    );
}
export default SearchContainer;