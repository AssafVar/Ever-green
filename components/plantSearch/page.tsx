import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import { getPlants } from "@/lib/trefle";

const PlantSearch = ({updatePlants}:any) => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [checkCommonName, setCheckCommonName] = useState(true);
  const [checkFamily, setCheckFamily] = useState(true);

  const fetchPlant = async () =>{
    const response: any = await getPlants();
    updatePlants(response.data);
  }
  return (
    <div className="flex flex-row">
      <div className="flex-column basis-3/4 mr-10">
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setCheckCommonName(e.target.checked)}
                checked={checkCommonName}
              />
            }
            label="Common name"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setCheckFamily(e.target.checked)}
                checked={checkFamily}
              />
            }
            label="Family name"
          />
        </Box>
        <Box>
          {checkCommonName && (
            <TextField
              className="mt-5"
              id="outlined-basic"
              label="Plant Name"
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
              value={name}
            />
          )}
          {checkFamily && (
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Plant Family"
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              onChange={(event) => {
                setFamily(event.target.value);
              }}
              value={family}
            />
          )}
          <div className="flex my-4 ">
            <Tooltip title="Search for your plant">
              <Button variant="text" className="ml-auto mr-6 " onClick={fetchPlant}>
                <SearchIcon />
              </Button>
            </Tooltip>
          </div>
        </Box>
      </div>
      <div className="flex mr-12 pt-4 basis-1/4 border-2 my-10 ml-5 rounded-lg border-green-700">
        <h3 className="px-4"> Previous Search</h3>
      </div>
    </div>
  );
};

export default PlantSearch;
