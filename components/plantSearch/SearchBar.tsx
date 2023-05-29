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
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getPlants } from "@/lib/trefle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const searchItems = [
  { name: "Common Name", value: "common_name" },
  { name: "family", value: "family" },
  { name: "genus", value: "genus" },
];


const SearchBar = ({ updatePlants }: any) => {
  const [name, setName] = useState("");
  const [searchItem, setSearchItem] = useState(searchItems[0].name);

  const fetchPlant = async () => {
    const response: any = await getPlants();
    updatePlants(response.data);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSearchItem(event.target.value as string);
  };
  useEffect(() => {
    console.log(searchItem);
  }, [searchItem]);
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
                    <MenuItem key={item.value} value={item.name}>
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
            label={`Search ${searchItem}`}
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
                event.key === "Enter" && fetchPlant()
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
