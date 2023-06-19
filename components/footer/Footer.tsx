import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center" className="text-gray-600">
              &copy; {new Date().getFullYear()} Your Plant Lovers Website. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
