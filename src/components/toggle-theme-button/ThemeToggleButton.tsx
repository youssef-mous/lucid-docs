import React from 'react';
import { Button } from '@mui/material';
import useToggleTheme from '@/hooks/useToggleTheme';

const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useToggleTheme();

  return (
    <Button onClick={toggleTheme} variant='contained'>
      Switch to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeToggleButton;
