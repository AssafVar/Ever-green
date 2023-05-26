import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "../Input.module.css";

const PlantSearch = () => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");

  return (
    <div className="flex justify-between">
      <form className="flex flex-col text-left ml-12">
        <TextField
          className="rounded-lg"
          id="outlined-basic"
          label="Plant Name"
          variant="outlined"
          onChange={(event) => {
            setName(event.target.value);
          }}
        >
          {name}
        </TextField>
        <label className="px-6 pt-4">
          Plant Name
          <input
            name="plantName"
            value={name}
            className={styles.inputSearch}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label className="px-6 pt-4">
          Plant Family
          <input
            type="text"
            value={family}
            name="plantFamily"
            className={styles.inputSearch}
            onChange={(event) => {
              setFamily(event.target.value);
            }}
          />
        </label>
        <Button>Click</Button>
      </form>
      <div className="flex mr-12 pt-4">
        <h3>Previous Search</h3>
      </div>
    </div>
  );
};
export default PlantSearch;
