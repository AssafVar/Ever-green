"use client";

import Layout from "@/components/layout/layout";
import Novels from "@/components/novels/page";
import { Providers } from "@/components/Providers";
import PlantSearch from "@/components/plantSearch/page";
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <main>
      <Providers>
        <Layout home={true}>
        <PlantSearch/>
        <Novels />
        </Layout>
      </Providers>
    </main>
  );
}
