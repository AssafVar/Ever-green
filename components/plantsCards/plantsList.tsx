import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PlantCard from "./plantCard";
import styled from "@emotion/styled";
import PlantDetails from "./plantDetails";
import useFetch from "@/hooks/useFetch";
import QueryResult from "../query-result";

const HeaderContainer = styled('header')({
  backgroundColor: '#F2F2F2',
  padding: '20px',
});

const HeaderTitle = styled(Typography)({
  color: '#333333',
  fontSize: '24px',
  fontWeight: 'bold',
});

const MasonryContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  justifyItems: 'center',
  marginTop:'10px',
  marginInline: "auto",
  width: '80%',
});

const PlantsList = ({ name }: { name: string }) => {
  const { loading, error, data } = useFetch('/api/plants', name ? name : 'Lily');

  useEffect(() => {
    // Add any necessary logic here
  }, [name]);

  return (
    <div>
      <HeaderContainer>
        <HeaderTitle variant="h1">{`Plant Search ${name && `:${name}`}`}</HeaderTitle>
      </HeaderContainer>
      <Box sx={{ minHeight: 829 }}>
        <QueryResult loading={loading} error={error} data={data}>
          <MasonryContainer>
            {data && data.length > 0 && data.map((item: PlantDetails) => (
              <div key={item.id}>
                <PlantCard details={item} />
              </div>
            ))}
          </MasonryContainer>
        </QueryResult>
      </Box>
    </div>
  );
};

export default PlantsList;
