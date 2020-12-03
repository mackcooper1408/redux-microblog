import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import PostList from "./PostList";

function Home() {

  return (
    <div className="container">
      <h1>Microblog</h1>
      <h3>Get in the Rithm of blogging</h3>
      <div className="Home-link mx-1">
        <Link to="/">Blog</Link>
      </div>
      <div className="Home-link mx-1">
        <Link to="/new">Add a new post</Link>
      </div>
      <div className="container mt-4">
        <p>Welcome to <b>Microblog</b>, our innovation site for communicating on the information superhighway.</p>
        <PostList />
      </div>
    </div>
  )
}

export default Home;