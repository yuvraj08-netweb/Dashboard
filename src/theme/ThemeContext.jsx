/* eslint-disable react/prop-types */
// src/ThemeContext.jsx
import { createContext, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { themes } from "./theme"; // Import all themes

// Create the context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("light"); // Default theme

  const theme = createTheme(themes[selectedTheme])

  const switchTheme = (themeName) => setSelectedTheme(themeName);

  return (
    <ThemeContext.Provider value={{ selectedTheme, switchTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
