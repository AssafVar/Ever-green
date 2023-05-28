import { Box } from "@mui/material";
import React from "react";
import PlantCard from "./plantCard";
import styled from "@emotion/styled";
import PlantDetails from "./plantDetails";

const MasonryContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '16px',
});

const PlantsList = ({plantsList}:PlantDetails[] | any) => {

  return (
    <div>
      <h1>Plants Cards</h1>
      <Box sx={{ minHeight: 829 }}>
      <MasonryContainer columns={3} spacing={2}>
      {plantsList && plantsList.map((item:PlantDetails)=>(
        <div key={item.id}>
            <PlantCard details={item}/>
        </div>
      ))}
      </MasonryContainer>
      </Box>
    </div>
  );
};

export default PlantsList;
