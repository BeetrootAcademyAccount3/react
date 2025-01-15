import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Home />;
  }

  // return null;
  return <Login />;
}

export default App;
