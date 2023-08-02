import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function setLight() {
    setTheme("light");
  }

  function setDark() {
    setTheme("dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
