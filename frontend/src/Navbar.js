import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar navbar bg-light">
      <div className="Navbar-left">
        <Link className="navbar-brand" to="/">Micro-Blog</Link>
        <small>Blog Blog Blog</small>
      </div>
      <ul className="Navbar-list navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new">New Post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;