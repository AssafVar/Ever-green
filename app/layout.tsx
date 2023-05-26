"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { theme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>EverGreen</title>
        <meta name="description" content="Generated fro EverGreen" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Providers>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>{children}</body>
        </ThemeProvider>
      </Providers>
    </html>
  );
}
