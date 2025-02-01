import Main from "./Main";
import Header from "./Header";
import React, { useState } from "react";

export const ThemeContext = React.createContext(true);

function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentPage, setCurrentPage] = useState("donations");

  function toggleTheme() {
    console.log("Theme");
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
      />
      <Main currentPage={currentPage} />
    </ThemeContext.Provider>
  );
}

export default Home;
