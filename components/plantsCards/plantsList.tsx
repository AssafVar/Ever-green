import { Box} from "@mui/material";
import React, { useEffect } from "react";
import PlantCard from "./plantCard";
import PlantDetails from "./plantDetails";
import useFetch from "@/hooks/useFetch";
import QueryResult from "../query-result";
import { HeaderContainer, HeaderTitle, MasonryContainer } from "./styles";


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
