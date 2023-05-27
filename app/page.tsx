"use client";

import Layout from "@/components/layout/layout";
import Novels from "@/components/novels/page";
import { Providers } from "@/components/Providers";
import PlantSearch from "@/components/plantSearch/page";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Providers>
        <Layout home={true}>
          <Container>
            <PlantSearch />
            <div className="border-b-4 border-gray-400"></div>
            <Novels />
            
          </Container>
        </Layout>
      </Providers>
    </main>
  );
}
