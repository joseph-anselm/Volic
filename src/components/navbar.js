import React, { Component } from "react";
import { Link } from "react-router-dom";
//import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'

export default class NavigationBar extends Component {
  state = {
    headerBreakPoint: 210,
    activeHeader: false,
    navbarExpanded: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY >= this.state.headerBreakPoint) {
        this.setState({
          activeHeader: true,
        });
      } else if (
        scrollY < this.state.headerBreakPoint &&
        this.state.navbarExpanded === false
      ) {
        this.setState({
          activeHeader: false,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top ${
            this.state.activeHeader ? "test1" : ""
          }`}
        >
          <Navbar
            expand="lg"
            bg=""
            variant="light"
            expanded={this.state.navbarExpanded}
            onToggle={(expanded) => {
              const scrollY = window.scrollY;

              const shouldHeaderBeActive = ((_) => {
                if (expanded === true) {
                  return true;
                } else if (
                  expanded === false &&
                  scrollY < this.state.headerBreakPoint
                ) {
                  return false;
                } else {
                  return true;
                }
              })();

              this.setState({
                navbarExpanded: expanded,
                activeHeader: shouldHeaderBeActive,
              });
            }}
          >
            <a
              className={`navbar-brand ${
                this.state.activeHeader ? "text-white" : "test"
              }`}
              href="#1"
            >
              <Navbar.Brand>
                <Link className="nav-link" to="/">
                  <img
                    alt="Volic Logo"
                    src="./images/volic-baby-logo.png"
                    width="160"
                    height="40"
                    className="d-inline-block align-top"
                  />{" "}
                </Link>
              </Navbar.Brand>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id=" mr-auto basic-navbar-nav">
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
        </nav>
      </div>
    );
  }
}
