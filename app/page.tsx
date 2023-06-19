"use client";

import Layout from '@/components/layout/layout';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Layout home={true}>
      <div>
        <h1>
          Home page
        </h1>
      </div>
    </Layout>
  )
}
export default HomePage;