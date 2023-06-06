import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import PlantCard from "./plantCard";
import PlantDetails from "./plantDetails";
import useFetch from "@/hooks/useFetch";
import QueryResult from "../query-result";
import { HeaderContainer, MasonryContainer } from "./styles";

const PlantsList = ({ name }: { name: string }) => {
  const { loading, error, data } = useFetch('/api/plants', name || 'Lily');

  useEffect(() => {
    // Add any necessary logic here
  }, [name]);

  return (
    <div className="mt-4">
      <HeaderContainer>
        <Typography variant="h1" sx={{ color: '#333333', fontSize: '23px', fontWeight: 'bold' }}>
          {`Plant Search ${name && `:${name}`}`}
        </Typography>
      </HeaderContainer>
      <Box minHeight={829}>
        <QueryResult loading={loading} error={error} data={data}>
          <MasonryContainer>
            {data && data.length > 0 && data.map((item: PlantDetails) => (
              <PlantCard key={item.id} details={item} />
            ))}
          </MasonryContainer>
        </QueryResult>
      </Box>
    </div>
  );
};

export default PlantsList;
