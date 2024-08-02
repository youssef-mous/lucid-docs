import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useToggleTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useToggleTheme must be used within a ThemeProviderWrapper');
  }
  return context;
};

export default useToggleTheme;
