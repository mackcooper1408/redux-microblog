import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PostList() {
  const posts = useSelector(store => store.posts);
  const postKeys = Object.keys(posts);

  return (
    <div>
      {postKeys.map(key => (
        <div className="col-12 mb-2" key={key}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                <Link to={`/${key}`}>{posts[key].title}</Link>
              </h2>
              <p><small><i>{posts[key].description}</i></small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList;