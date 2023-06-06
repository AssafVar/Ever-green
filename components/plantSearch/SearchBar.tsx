import React, { useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMutation } from "@apollo/client";
import { INSERT_SEARCH } from "@/graphql/queries";
import { nanoid } from "nanoid";
import { Search } from "@/typings";

const searchItems = [
  { name: "Common Name", value: "common_name", key: "1" },
  { name: "family", value: "family", key: "2" },
  { name: "genus", value: "genus", key: "3" },
];

type SearchBarProps = {
  updateSearchList: (item: Search | string, action: string) => void;
};

const SearchBar = ({ updateSearchList }: SearchBarProps) => {
  const [name, setName] = useState("");
  const [searchItem, setSearchItem] = useState({
    name: searchItems[0].name,
    value: searchItems[0].value,
  });

  const [insertSearch, { loading, error, data }] = useMutation(INSERT_SEARCH);

  const handleNewSearch = async (item: { value: string; name: string }) => {
    try {
      const variables = {
        id: nanoid(),
        userId: "12",
        searchCode: item.value,
        searchString: item.name,
        createAt: new Date().toLocaleString(),
      };
      const response: any = await insertSearch({
        variables: variables,
      }).then(() => {
        updateSearchList(variables, "insert");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPlant = async () => {
    handleNewSearch({ value: searchItem.value, name });
  };

  const handleSearchChange = (event: SelectChangeEvent) => {
    const { value, name } = JSON.parse(event.target.value);
    setSearchItem({ ...searchItem, name, value });
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex-column">

        <Box className="flex items-center mt-5">
  
          <TextField
            id="outlined-basic"
            label={`Search ${searchItem.name}`}
            variant="outlined"
            fullWidth
            InputProps={{
              style: {
                borderRadius: "10px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={()=>fetchPlant()}>
                  <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <FormControl>
                  <InputLabel id="select-search"></InputLabel>
                  <Tooltip title="Select your search" placement="top">
                    <Select
                      labelId="select-search"
                      id="select-search"
                      value=""
                      onChange={handleSearchChange}
                      sx={{
                        "& fieldset": { border: "none" },
                      }}
                      IconComponent={MenuIcon}
                    >
                      {searchItems.map((item) => {
                        return (
                          <MenuItem
                            key={item.key}
                            value={JSON.stringify(item)}
                          >
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </Tooltip>
                </FormControl>
              ),
            }}
            onChange={(event) => {
              setName(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                fetchPlant();
              }
            }}
            value={name}
          />

        </Box>
      </div>
    </div>
  );
};

export default SearchBar;
