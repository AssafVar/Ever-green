"use client";

import Layout from "@/components/layout/layout";
import { Providers } from "@/components/Providers";
import PlantsCards from "@/components/plantsCards/plantsList";
import { useState } from "react";
import SearchContainer from "@/components/plantSearch/searchContainer";
import WithAuth from "@/components/auth/AuthChecker";
import { FlexContainer, LeftSideBox } from "./styles";


export default function SearchPage() {

  const [searchText, setSearchText] = useState('');

  const updateSearch = (text: string) => {
    setSearchText(text);
  }


  return (
    <WithAuth>
      <Providers>
        <Layout home={true}>
          <FlexContainer>
            <LeftSideBox>
              <SearchContainer updateSearch={updateSearch} searchText={searchText} />
            </LeftSideBox>
            <PlantsCards name={searchText} />
          </FlexContainer>
        </Layout>
      </Providers>
    </WithAuth>
  );
}
