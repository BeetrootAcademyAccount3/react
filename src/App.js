import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Login from "./components/Login";
import CardList from "./components/Cards/CardList";
import Donations from "./components/Donations/Donations";
import Header from "../src/components/Header";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DogDetails from "./components/Cards/Comments/DogDetails";

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<AboutUs />} />

        <Route path="/dogs" element={<CardList />}>
          <Route path=":id" element={<DogDetails />} />
        </Route>

        <Route path="/donations" element={<Donations />} />
      </Routes>
    </div>
  );
}

export default App;
