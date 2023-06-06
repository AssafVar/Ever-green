"use client";
import { purple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const theme = createTheme({
  
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    warning: {
      main: red[500],
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
