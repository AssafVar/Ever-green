import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useMutation } from "@apollo/client";
import { INSERT_SEARCH } from "@/graphql/queries";
import { nanoid } from "nanoid";

const searchItems = [
  { name: "Common Name", value: "common_name", key: "1" },
  { name: "family", value: "family", key: "2" },
  { name: "genus", value: "genus", key: "3" },
];

const SearchBar = ({ updateSearch }: any) => {

  const [name, setName] = useState("");
  const [searchItem, setSearchItem] = useState({
    name: searchItems[0].name,
    value: searchItems[0].value,
  });

const [insertSearch, { loading, error, data }] = useMutation(INSERT_SEARCH);

const handleNewSearch = async (item:{value:string, name:string}) => {
  try{
    updateSearch(name);
    console.log(new Date(),(new Date()).toLocaleString());
    const response:any = await insertSearch({
      variables:{
        id: nanoid(),
        userId:'12',
        searchCode: item.value,
        searchString: item.name,
        createAt: (new Date()).toLocaleString(),
      }
    });
  }catch(err) {
    console.log(err);
  }
}

  const fetchPlant = async () => {
    handleNewSearch({value: searchItem.value, name})
  };

  const handleSearchChange = (event: SelectChangeEvent) => {
    const { value, name } = JSON.parse(event.target.value);
    setSearchItem({ ...searchItem, name, value });
  };

  return (
    <div className="flex flex-row  justify-center">
      <div className="flex-column">
        <Box className="flex items-center mt-5">
          <FormControl>
            <InputLabel id="select-search"></InputLabel>
            <Tooltip title="Select your search" placement="top">
              <Select
                labelId="select-search"
                id="select-search"
                value=""
                IconComponent={ArrowDropDownCircleIcon}
                onChange={handleSearchChange}
                sx={{
                  "& fieldset": { border: "none" },
                }}
              >
                {searchItems.map((item) => {
                  return (
                    <MenuItem key={item.key} value={JSON.stringify(item)}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Tooltip>
          </FormControl>
          <TextField
            id="outlined-basic"
            label={`Search ${searchItem.name}`}
            variant="outlined"
            fullWidth
            InputProps={{
              style: {
                borderRadius: "10px",
              },
            }}
            onChange={(event) => {
              setName(event.target.value);
            }}
            onKeyDown={(event) => {
              {
                event.key === "Enter" && fetchPlant();
              }
            }}
            value={name}
          />
          <Tooltip title="Search">
            <IconButton className="m-auto " onClick={fetchPlant}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
    </div>
  );
};

export default SearchBar;
