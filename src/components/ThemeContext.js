import React, { useState, useContext } from "react";

const ThemeContext = React.createContext(true);
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContext.Consumer>
        {(darkTheme) => (
          <ThemeUpdateContext.Provider value={(toggleTheme, darkTheme)}>
            {children}
          </ThemeUpdateContext.Provider>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}
