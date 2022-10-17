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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 860,
      lg: 1200,
      xl: 1536,
    },
  },
});
