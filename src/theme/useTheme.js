// src/useTheme.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the context

const useTheme = () => useContext(ThemeContext);

export default useTheme;
