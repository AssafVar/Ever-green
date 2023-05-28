import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import PlantDetails from "./plantDetails";

const PlantCard = ({ details }: { details: PlantDetails }) => {
  const {
    author,
    bibliography,
    common_name,
    family,
    family_common_name,
    genus,
    genus_id, 
    id, 
    image_url, 
    links,
    rank,
    scientific_name,
    slug, 
    status,
    synonyms,
    year,
  } = details;

  return (
    <div>
      <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia 
          component="img"
          height="140"
          width="140"
          image={image_url}
          alt={common_name}
          sx={{maxHeight: 200}}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {common_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {scientific_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Family: {family}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genus: {genus}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bibliography: {bibliography}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlantCard;
