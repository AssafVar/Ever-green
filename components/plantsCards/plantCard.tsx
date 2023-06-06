import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PlantDetails from "./plantDetails";

const PlantCard = ({ details }: { details: PlantDetails }) => {
  const {
    common_name,
    scientific_name,
    author,
    family,
    genus,
    bibliography,
    image_url,
  } = details;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        image={image_url}
        alt={common_name}
        sx={{ aspectRatio: '1', objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          {common_name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
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
  );
};

export default PlantCard;
