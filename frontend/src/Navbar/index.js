import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

/**
 * Displays navbar
 * Shows toggle on smaller screens
 */
function microNavbar() {
  return (
    <Navbar
      collapseOnSelect
      className="Navbar"
      bg="light"
      expand="lg"
      animation="true"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand as={Link} className="navbar-brand" to="/">
        <p className="mb-0">MicroBlog</p>
        <small>Blog of the Future</small>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" animation="false">
        <Nav className="ml-auto d-flex flex-column flex-lg-row">
          <NavDropdown
            className="mx-1"
            title="Categories"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/posts/stupid">
              Stupid Blog Posts
            </NavDropdown.Item>
            <NavDropdown.Item href="/posts/fun">
              Fun Blog Posts
            </NavDropdown.Item>
            <NavDropdown.Item href="/posts/adventures">
              Adventures Blog Posts
            </NavDropdown.Item>
            <NavDropdown.Item href="/posts/lazy">
              Lazy Blog Posts
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} className="mx-1" href="" to="/new">
            New Post
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default microNavbar;
