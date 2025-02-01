import "../css/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineSun, AiFillSun } from "react-icons/ai";

function Header({ currentPage, setCurrentPage, darkTheme, toggleTheme }) {
  const isServerDown = false;
  const isAdmin = true;

  return (
    <Navbar
      bg={darkTheme ? "dark" : "light"}
      data-bs-theme={darkTheme ? "dark" : "light"}
    >
      <Container className="m-0 pl-4">
        <Navbar.Brand href="#home">Dog Shelter</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link
            href="#dogs"
            active={currentPage === "dogs"}
            onClick={() => setCurrentPage("dogs")}
          >
            Dogs
          </Nav.Link>
          <Nav.Link
            href="#donations"
            active={currentPage === "donations"}
            onClick={() => setCurrentPage("donations")}
          >
            Donations
          </Nav.Link>
          <Nav.Link
            href="#aboutUs"
            active={currentPage === "aboutUs"}
            onClick={() => setCurrentPage("aboutUs")}
          >
            About us
          </Nav.Link>
          <Nav.Link onClick={toggleTheme}>
            {darkTheme ? <AiOutlineSun /> : <AiFillSun color="black" />}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
