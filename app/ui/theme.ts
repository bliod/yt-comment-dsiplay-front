"use client";
import { createTheme } from "@mui/material/styles";
import { inter } from "@/app/ui/fonts";

// Custom theme to match Surfshark colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#0DC5B4",
    },
    error: {
      main: "#FF4C6A",
    },
  },
  typography: {
    ...inter.style,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
