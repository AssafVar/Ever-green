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
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardMedia 
          component="img"
          image={image_url}
          alt={common_name}
          sx={{ aspectRatio: '1', objectFit: 'cover' }}
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
