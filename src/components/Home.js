import Main from "./Main";
import Header from "./Header";
import React, { useState } from "react";

export const ThemeContext = React.createContext(true);

function Home() {
  const [activeTab, setActiveTab] = useState("dogs");
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleTheme={toggleTheme}
        darkTheme={darkTheme}
      />
      <Main activeTab={activeTab} />
    </ThemeContext.Provider>
  );
}

export default Home;
