import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getPlants } from "@/lib/trefle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useMutation } from "@apollo/client";
import { INSERT_SEARCH } from "@/graphql/queries";

const searchItems = [
  { name: "Common Name", value: "common_name", key: "1" },
  { name: "family", value: "family", key: "2" },
  { name: "genus", value: "genus", key: "3" },
];

const SearchBar = ({ updatePlants }: any) => {
  const [name, setName] = useState("");
  const [searchItem, setSearchItem] = useState({
    name: searchItems[0].name,
    value: searchItems[0].value,
  });
const [insertSearch, { loading, error, data }] = useMutation(INSERT_SEARCH);

const handleNewSearch = async(item:{value:string, name:string}) => {
  try{
    const response = await insertSearch({
      variables:{
        userId:'12',
        searchCode: item.value,
        searchString: item.name,
      }
    });
  }catch(err) {
    console.log(err);
  }
}

  const fetchPlant = async () => {
    const response: any = await getPlants({
      value: searchItem.value,
      name
    });
    updatePlants(response.data);
    handleNewSearch({value: searchItem.value, name})
  };
  const handleChange = (event: SelectChangeEvent) => {
    const { value, name } = JSON.parse(event.target.value);
    setSearchItem({ ...searchItem, name, value });
  };

  return (
    <div className="flex flex-row">
      <div className="flex-column basis-3/4 mr-10">
        <Box className="flex items-end">
          <FormControl>
            <InputLabel id="select-search"></InputLabel>
            <Tooltip title="Select your search" placement="top">
              <Select
                labelId="select-search"
                id="select-search"
                value=""
                IconComponent={ArrowDropDownCircleIcon}
                onChange={handleChange}
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
            className="mt-5"
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
          <Tooltip title="Search for your plant">
            <Button variant="text" className="m-auto " onClick={fetchPlant}>
              <SearchIcon />
            </Button>
          </Tooltip>
        </Box>
      </div>
    </div>
  );
};

export default SearchBar;
