// src/components/ThemeSwitcher.js
import { MenuItem, Select, FormControl } from '@mui/material';
 // Import the hook
import useTheme from './useTheme';
const ThemeSwitcher = () => {
  const { selectedTheme, switchTheme } = useTheme();

  const handleChange = (event) => {
    switchTheme(event.target.value);
  };
  
  return (
    <FormControl style={{ minWidth: 120}}>
      <Select value={selectedTheme} onChange={handleChange} sx={{height:"40px"}}>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="custom">Custom</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSwitcher;
