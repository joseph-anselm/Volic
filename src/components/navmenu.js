import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  NavLink,
  Link,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const Navmenu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt="Volic Logo"
            src="./images/volic-diapers-logo.png"
            width="180"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="text-black nav-link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black nav-link" to="/products">
                Our Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black nav-link" to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black nav-link" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navmenu;
