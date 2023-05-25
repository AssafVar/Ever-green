import React, { useState } from "react";

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
            className="mx-3 border-2 rounded-lg border-gray-300"
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
