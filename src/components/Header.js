import "../css/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineSun, AiFillSun } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

function Header({ currentPage, setCurrentPage, darkTheme, toggleTheme }) {
  const isServerDown = false;
  const isAdmin = true;

  return (
    <div>
      <Navbar
        bg={darkTheme ? "dark" : "light"}
        data-bs-theme={darkTheme ? "dark" : "light"}
      >
        <Container className="m-0 pl-4">
          <Navbar.Brand href="#home">Dog Shelter</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="dogs">
              Dogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="donations">
              Donations
            </Nav.Link>
            <Nav.Link as={NavLink} to="aboutUs">
              About us
            </Nav.Link>
            <Nav.Link onClick={toggleTheme}>
              {darkTheme ? <AiOutlineSun /> : <AiFillSun color="black" />}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Header;
