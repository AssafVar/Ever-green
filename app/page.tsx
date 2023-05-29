"use client";

import Layout from "@/components/layout/layout";
import { Providers } from "@/components/Providers";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Container } from "@mui/material";
import PlantsCards from "@/components/plantsCards/plantsList";
import { useState } from "react";
import PlantDetails from "@/components/plantsCards/plantDetails";
import SearchBar from "@/components/plantSearch/SearchBar";
import PreviousSearch from "@/components/plantSearch/previousSearch";
import styled from "@emotion/styled";

const FlexContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '16px',
  '@media (max-width: 800px)': {
    flexDirection: 'column',
    alignItems:'center',
  },
  marginBottom:'30px',
});

const createNewSearch:any = (item:any ) => {
  console.log(item)
}

export default function Home() {
  const [plantsList, setPlantsList] = useState([]);

  const updatePlants = (list: any | PlantDetails[]) => {
    setPlantsList(list);
  };
  return (
    <main>
      <Providers>
        <Layout home={true}>
          <Container>
            <FlexContainer >
              <SearchBar updatePlants={updatePlants} />
              <PreviousSearch createNewSearch={createNewSearch}/>
            </FlexContainer>
              <div className="border-b-4 border-gray-400"></div>
              <PlantsCards plantsList={plantsList} />
          </Container>
        </Layout>
      </Providers>
    </main>
  );
}
