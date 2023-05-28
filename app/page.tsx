"use client";

import Layout from "@/components/layout/layout";
import Novels from "@/components/novels/page";
import { Providers } from "@/components/Providers";
import PlantSearch from "@/components/plantSearch/page";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Container } from "@mui/material";
import PlantsCards from "@/components/plantsCards/plantsList";
import { useState } from "react";
import PlantDetails from "@/components/plantsCards/plantDetails";

export default function Home() {
  
  const [plantsList, setPlantsList] = useState([]);

  const updatePlants = (list:any|PlantDetails[]) => {
    setPlantsList(list);
  };
  return (
    <main>
      <Providers>
        <Layout home={true}>
          <Container>
            <PlantSearch updatePlants={updatePlants}/>
            <div className="border-b-4 border-gray-400"></div>
            <PlantsCards plantsList={plantsList}/>
{/*             <Novels />
 */}          </Container>
        </Layout>
      </Providers>
    </main>
  );
}
