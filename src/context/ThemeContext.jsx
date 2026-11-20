/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';

export const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  return children;
}
