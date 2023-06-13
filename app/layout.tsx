"use client";
import "./globals.css";
import { customTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Providers } from "@/components/Providers";
import { UserContextProvider } from "@/lib/contexts/userContext";

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
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <UserContextProvider>
            <body>{children}</body>
          </UserContextProvider>
        </ThemeProvider>
      </Providers>
    </html>
  );
}
