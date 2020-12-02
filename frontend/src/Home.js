import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const initialPosts = [
    { id: 123, title: "cool stuff", description: "this is cool" },
    { id: 1243, title: "cool stuff", description: "this is cool" }]
  const [posts, setPosts] = useState(initialPosts);
  // const postCards = Object.keys(posts).map(id => (

  return (
    <div className="container">
      <h1>Microblog</h1>
      <h3>Get in the Rithm of blogging</h3>
      <div className="Home-link mx-1">
        <Link to="/blog">Blog</Link>
      </div>
      <div className="Home-link mx-1">
        <Link to="/new">Add a new post</Link>
      </div>
      <div className="container mt-4">
        <p>Welcome to <b>Microblog</b>, our innovation site for ocmmunicating on the information superhighway.</p>
        {posts.map(post => (
          <div className="col-12 mb-2" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">
                  <Link to={`/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Home;