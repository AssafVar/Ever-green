import React, { useState } from "react";
import styles from "../Input.module.css";

const PlantSearch = () => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");

  return (
    <div className="flex">
      <form >
        <label>
          Plant Name
          <input
            type="text"
            value={name}
            className={styles.inputSearch}
            onChange={(event) => {
                setName(event.target.value);
            }}
          />
        </label>
        <label>
          Plant Family
          <input
            type="text"
            value={family}
            className={styles.inputSearch}
            onChange={(event) => {
                setFamily(event.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
};
export default PlantSearch;
