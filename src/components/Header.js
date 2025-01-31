import "../css/Header.css";
import { Alert, Toast } from "react-bootstrap";
import ToastMessage from "./Toast";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineSun, AiFillSun } from "react-icons/ai";

function Header({ activeTab, setActiveTab, toggleTheme, darkTheme }) {
  const isServerDown = false;
  const isAdmin = true;

  return (
    <div>
      <Navbar
        bg={darkTheme ? "dark" : "light"}
        data-bs-theme={darkTheme ? "dark" : "light"}
        className="mb-4"
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              active={activeTab === "dogs"}
              onClick={() => setActiveTab("dogs")}
            >
              Dogs
            </Nav.Link>
            <Nav.Link
              href="#features"
              active={activeTab === "donations"}
              onClick={() => setActiveTab("donations")}
            >
              Donations
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              active={activeTab === "aboutUs"}
              onClick={() => setActiveTab("aboutUs")}
            >
              About us
            </Nav.Link>
            <Nav.Link onClick={toggleTheme}>
              {darkTheme ? <AiOutlineSun /> : <AiFillSun color="black" />}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* {isServerDown && (
        <Alert key="danger" variant="danger">
          Servers are down!
        </Alert>
      )}

      {isAdmin ? (
        <ToastMessage />
      ) : (
        <Toast>
          <Toast.Header>
            <strong className="me-auto">User</strong>
            <small>55 mins ago</small>
          </Toast.Header>
          <Toast.Body>Update your email address.</Toast.Body>
        </Toast>
      )}
      <h1 className="Header-h1">Title</h1>
      <h2 className="Header-h2">Second Title</h2> */}
    </div>
  );
}

export default Header;
