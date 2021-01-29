import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

function microNavbar() {
  // return (
  //   <nav className="Navbar navbar navbar-light bg-light">
  //     <div className="Navbar-left navbar-brand">
  //       <Link className="" to="/">Micro-Blog</Link>
  //       <small>Blog Blog Blog</small>
  //     </div>
  //     <ul className="Navbar-list navbar-nav">
  //       <li className="nav-item">
  //         <Link className="nav-link" to="/">Blog</Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link className="nav-link" to="/new">New Post</Link>
  //       </li>
  //     </ul>
  //   </nav>
  // )
  return (
    <Navbar collapseOnSelect className="Navbar" bg="light" expand="lg" animation="false">
      <Navbar.Brand as={Link} className="navbar-brand" to="/">
        <p>Micro-Blog</p>
        <small>Blog Blog Blog</small>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav" animation="false"> */}
        <Nav className="ml-auto d-flex flex-row">
          <Nav.Link as={Link} className="mx-1" to="/">Blog</Nav.Link>
          <Nav.Link as={Link} className="mx-1" to="/new">New Post</Nav.Link>
          <NavDropdown className="mx-1" title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="/posts/stupid">Stupid Blog Posts</NavDropdown.Item>
            <NavDropdown.Item href="/posts/fun">Fun Blog Posts</NavDropdown.Item>
            <NavDropdown.Item href="/posts/adventures">Adventures Blog Posts</NavDropdown.Item>
            <NavDropdown.Item href="/posts/lazy">Lazy Blog Posts</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>)
}

export default microNavbar;