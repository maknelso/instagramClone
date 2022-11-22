import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0074cc",
    },
    secondary: {
      main: "#6c757d",
      secondary: "#F7F8FA",
    },
    dark: {
      main: "#4267B2",
      secondary: "#385185",
    },
    grey: {
      main: "rgba(var(--f52,142,142,142),1)",
    },
    white: {
      main: "#fff",
    },
    black: {
      main: "#000",
    },
    red: {
      main: "#FA383E",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});
