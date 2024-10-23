// src/theme.js

export const lightTheme = {
  palette: {
    mode: "light",
    primary: { main: "#000" },
    background: { default: "#fff", paper: "#f5f5f5" },
    text: { primary: "#000" },
  },
};

export const darkTheme = {
  palette: {
    mode: "dark",
    primary: { main: "#fff" },
    background: { default: "#121212", paper: "#1d1d1d" },
    text: { primary: "#fff" },
  },
};

export const customTheme = {
  palette: {
    mode:"light",
    primary: { main: "#1457c9" },
    background: { default: "#eee", paper: "#fff" },
    text: { primary: "#000" },
  },
};

// Export all themes as an object to map them easily by name
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
};
