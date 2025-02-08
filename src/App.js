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
import NotFound from "./components/NotFound";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      console.log(user);
      setIsLoggedIn(true);
    } else {
      console.log("Not signed in!");
      setIsLoggedIn(false);
    }
  });

  return (
    <div>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <div>
          <Home />
          <Routes>
            <Route path="/" element={<AboutUs />} />

            <Route path="/dogs" element={<CardList />}>
              <Route path=":id" element={<DogDetails />} />
            </Route>

            <Route path="/donations" element={<Donations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
