import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Login from "./components/Login";
import CardList from "./components/Cards/CardList";
import Donations from "./components/Donations/Donations";
import Header from "../src/components/Header";
import {
  Routes,
  Route,
  Link,
  NavLink,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DogDetails from "./components/Cards/Comments/DogDetails";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/dogs",
        element: <CardList />,
        children: [
          {
            path: ":id",
            element: <DogDetails />,
          },
        ],
      },
      {
        path: "/donations",
        element: <Donations />,
      },
    ],
  },
]);

function App() {
  const isLoggedIn = true;

  return <RouterProvider router={router} />;
}

export default App;
