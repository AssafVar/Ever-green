"use client";

import Layout from "@/components/layout/layout";
import { Providers } from "@/components/Providers";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import PlantsCards from "@/components/plantsCards/plantsList";
import { useState } from "react";
import styled from "@emotion/styled";
import SearchContainer from "@/components/plantSearch/searchContainer";

const FlexContainer = styled('div')({
  display: 'grid',
  gap: '16px',
  flexDirection: 'column',
  gridTemplateColumns: '1fr 4fr',
  '@media (max-width: 1200px)': {
    gridTemplateColumns: '1fr 9fr',
  },
  '@media (max-width: 630px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    flexDirection: 'column',
    alignItems:'center',
  },
  marginBottom:'30px',
});

const LeftSideBox = styled('div')({
  justifyContent: 'center',
  '@media (max-width:1200px)':{
    width: '300px',
  },
  '@media (max-width:630px)':{
  justifySelf: 'center',
  }
})


export default function Home() {

  const [searchText, setSearchText] = useState('');

  const updateSearch = (text: string) => {
    setSearchText(text);
  }

  return (
    <main>
      <Providers>
        <Layout home={true}>
          <FlexContainer>
            <LeftSideBox >
              <SearchContainer updateSearch={updateSearch} searchText={searchText} />
            </LeftSideBox>
              <PlantsCards name={searchText} />
          </FlexContainer>
        </Layout>
      </Providers>
    </main>
  );
}
