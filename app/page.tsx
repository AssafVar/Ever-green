"use client";
import React from 'react';
import Head from 'next/head';
import { Container, Grid, Button, Typography, Card, CardContent, Avatar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/layout/layout';
import Footer from '@/components/footer/Footer';
import customTheme from './theme/themes';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Your Plant Lovers Website</title>
      </Head>
      <ThemeProvider theme={customTheme}>
        <Layout home={true}>
          <div className="hero bg-gradient-to-b from-green-500 to-blue-400">
            <Container className="py-24">
              <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h2" align="center" gutterBottom className="text-white">
                    Welcome to Our Plant Lovers Community
                  </Typography>
                  <Typography variant="body1" align="center" paragraph className="text-white">
                    Discover the joy of gardening and nurture your love for plants with us. Whether you're a seasoned gardener or just starting, we provide a wealth of resources, tips, and a thriving community to support your journey.
                  </Typography>
                  <Typography variant="body1" align="center" className="text-white">
                    Join us today and explore our vast collection of plants, connect with fellow enthusiasts, and learn from experts to create your own green oasis.
                  </Typography>
                  <Button variant="contained" color="primary" className="bg-green-500 hover:bg-green-600 mt-8 mx-auto block">
                    Join Now
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>

          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h2" component="h2" align="center" gutterBottom className="text-green-500">
                  Welcome to Our Plant Lovers Community
                </Typography>
                <Typography variant="body1" align="center" paragraph className="text-gray-600">
                  Discover the joy of gardening and nurture your love for plants with us. Whether you're a seasoned gardener or just starting, we provide a wealth of resources, tips, and a thriving community to support your journey.
                </Typography>
                <Typography variant="body1" align="center" className="text-gray-600">
                  Join us today and explore our vast collection of plants, connect with fellow enthusiasts, and learn from experts to create your own green oasis.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className="bg-white shadow-lg rounded-lg h-full">
                  <CardContent>
                    <Typography variant="h4" component="h3" gutterBottom className="text-green-500">
                      Featured Plant
                    </Typography>
                    <Typography variant="body1" paragraph className="text-gray-600">
                      Explore our diverse collection of stunning plants, carefully selected for their beauty and quality. From lush green foliage to vibrant blooms, there's something for every plant lover.
                    </Typography>
                    <Button variant="contained" color="primary" className="bg-green-500 hover:bg-green-600">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className="bg-white shadow-lg rounded-lg h-full">
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom className="text-green-500">
                      "I transformed my balcony into a lush oasis!"
                    </Typography>
                    <Typography variant="body1" paragraph className="text-gray-600">
                      - Amanda, Plant Lover since 2018
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Thanks to the guidance and resources provided by this community, I was able to turn my small balcony into a green paradise. I've learned so much and discovered a true passion for gardening.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="bg-white shadow-lg rounded-lg">
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom className="text-green-500">
                      Watering Basics
                    </Typography>
                    <Typography variant="body1" paragraph className="text-gray-600">
                      Learn the essentials of watering your plants to ensure they stay healthy and hydrated. Find out the right frequency, amount, and techniques for watering different types of plants.
                    </Typography>
                    <Button variant="contained" color="primary" className="bg-green-500 hover:bg-green-600">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="bg-white shadow-lg rounded-lg">
                  <CardContent>
                    <Avatar alt="User" src="/images/user1.jpg" />
                    <Typography variant="h6" component="h3" gutterBottom className="text-green-500">
                      Jane's Beautiful Garden
                    </Typography>
                    <Typography variant="body1" paragraph className="text-gray-600">
                      Take a virtual tour of Jane's stunning garden filled with a wide variety of plants. Get inspired by her creative plant arrangements and design ideas.
                    </Typography>
                    <Button variant="contained" color="primary" className="bg-green-500 hover:bg-green-600">
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" className="bg-green-500 hover:bg-green-600">
                  Explore More
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Layout>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default HomePage;
