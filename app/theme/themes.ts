import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      light: "#F0F0F0",
      main: "#67a891",
      dark: "#212121",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#FFC947",
      main: "#FF9800",
      dark: "#F57C00",
      contrastText: "#000000",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    success: {
      light: "#B9EEC6",
      main: "#66BB6A",
      dark: "#388E3C",
      contrastText: "#000000",
    },
    warning: {
      light: "#FFD54F",
      main: "#FFC107",
      dark: "#FFA000",
      contrastText: "#000000",
    },
  },
});

export default customTheme;
