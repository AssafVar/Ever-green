"use client";
import { purple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const customTheme = createTheme({
  
  palette: {
    primary: {
      light: "#63a4ff",
      main: "#1976d2",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "#000000",
    },
    // Custom colors
    warning: {
      light: "#84d7ff",
      main: "#00aeff",
      dark: "#007ad6",
      contrastText: "#ffffff",
    },
    success: {
      light: "#ff9e80",
      main: "#ff6e40",
      dark: "#c53d13",
      contrastText: "#000000",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 10,
    },
  }
});
