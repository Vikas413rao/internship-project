import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
 typography: {
  fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
},
 palette: {
    mode: "light",

    primary: {
      main: "#1976d2",
      dark: "#115293"
    },

    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    icon:{
      primary:"#000000",
      secondary:"#302525a7"
    },
    text: {
      primary: "#000000",
      secondary: "#555555"
    },

    grey: {
      100: "#f5f5f5",
      200: "#adadad70",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121"
    }
  }
});
export const darkTheme = createTheme({
typography: {
  fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
},
     palette: {
    mode: "dark",

    primary: {
      main: "#1976d2",
      dark: "#0d47a1"
    },

    background: {
      default: "#121212",
      paper: "#1e1e1e",
      
    },
    icon:{
      primary:"#ffffff",
      secondary: "#c9c9c9"
    },
    text: {
      primary: "#ffffff",
      secondary: "#e8dcdc"
    },

    grey: {
      100: "#2a2a2a",
      200: "#3b3b3b",
      300: "#3d3d3d",
      400: "#555555",
      500: "#777777",
      600: "#999999",
      700: "#bdbdbd",
      800: "#e0e0e0",
      900: "#f5f5f5"
    }
  }
});