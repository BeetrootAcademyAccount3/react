import "../scss/Main.scss";
import AlertPage from "./AlertPage";
import CardList from "./Cards/CardList";
import Donations from "./Donations/Donations";
import AboutUs from "./AboutUs";
import { useContext } from "react";
import { ThemeContext } from "./Home";

function Main({ currentPage }) {
  const darkTheme = useContext(ThemeContext);

  return (
    <div
      className="main-page-h"
      style={
        darkTheme ? { backgroundColor: "grey" } : { backgroundColor: "yellow" }
      }
    >
      {currentPage === "donations" && <Donations />}
      {currentPage === "dogs" && <CardList />}
      {currentPage === "aboutUs" && <AboutUs />}
    </div>
  );
}

export default Main;
