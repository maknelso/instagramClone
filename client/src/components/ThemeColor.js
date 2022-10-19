import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4661E6",
    },
    secondary: {
      main: "#6c757d",
    },
    dark: {
      main: "#4267B2",
    },
    grey: {
      main: "rgba(var(--f52,142,142,142),1)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 451,
      md: 860,
      lg: 1200,
      xl: 1536,
    },
  },
});
