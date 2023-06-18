import React, { useEffect, useState } from "react";
import PreviousSearch from "./previousSearch";
import SearchBar from "./searchBar";
import { Search } from "@/typings";

interface SearchContainerProps {
  updateSearch: (text: string) => void;
  searchText: string;
}

const SearchContainer: React.FC<SearchContainerProps> = ({ updateSearch, searchText }) => {

  const [newSearchlist, setNewSearchList] = useState<any[]>([]);
  const [isUnder600px, setIsUnder600px] = useState<boolean>(false);

  const updateNewSearchList = (item: any) => {
    setNewSearchList(item);
  }
  const updateSearchList = (item: Search | string, action: string) => {
    if (action === 'delete') {
      const newList = newSearchlist.filter((search: any) => {
        return search.id !== item;
      });
      updateNewSearchList(newList);
    } else if (action === 'deleteAll') {
      updateNewSearchList([]);
    } else if (action === 'insert') {
      const newList = newSearchlist as Array<Search | any>;
      !!item && newList.push(item);
      typeof item !== 'string' && item?.searchString && updateSearch(item?.searchString)
      updateNewSearchList(newList);
    }
  };
  useEffect(() => {
    updateSearchList(searchText, 'insert')

    function handleResize() {
      setIsUnder600px(window.innerWidth < 650);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`ml-4 ${isUnder600px && `flex items-center`}`}>
      <SearchBar updateSearchList={updateSearchList} />
      <PreviousSearch updateSearchList={updateSearchList} updateSearch={updateSearch} newSearchlist={newSearchlist} updateNewSearchList={updateNewSearchList} isUnder600px={isUnder600px} />
    </div>
  );
}
export default SearchContainer;