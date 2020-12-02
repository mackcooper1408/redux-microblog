import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div className="col-12 mb-2" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                <Link to={`/${post.id}`}>{post.title}</Link>
              </h2>
              <p><small><i>{post.description}</i></small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList;