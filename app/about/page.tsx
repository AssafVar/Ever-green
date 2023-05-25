"use client";

import Layout from "@/components/layout/layout";
import React, { useEffect } from "react";
import axios from "axios";

export default function page() {
    const getPlants = async() =>{
      /*        
        const response = await axios("http://localhost:3000/api/plants")
 const response = await axios(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_API_TOKEN}`);
 */       
    }
    useEffect(() => {
      getPlants();
    },[]);
  return (
    <Layout>
      <div>about</div>
    </Layout>
  );
}
