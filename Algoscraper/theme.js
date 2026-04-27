import { createTheme } from "@mui/material/styles";

const commonTheme = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Inter", sans-serif', 
        },
      },
    },

    
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          textTransform: 'none', 
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
  }
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",

    primary: {
      main: "#1976d2",
      dark: "#115293"
    },

    background: {
      default: "rgb(248, 244, 244)",
      paper: "#ffffff",
    },

    icon: {
      primary: "#000000",
      secondary: "#302525a7"
    },

    text: {
      primary: "#000000",
      secondary: "#555555"
    },
    scenario:{
      bgcolor:'#a7daff'
    },
    grey: {
      100: "#f5f5f5",
      200: "#9f9f9f3c",
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
  ...commonTheme,
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

    icon: {
      primary: "#ffffff",
      secondary: "#c9c9c9"
    },

    text: {
      primary: "#ffffff",
      secondary: "#e8dcdc"
    },
scenario:{
      bgcolor:'#000000'
    },
    grey: {
      100: "#2a2a2a",
      200: "#3b3b3bb5",
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