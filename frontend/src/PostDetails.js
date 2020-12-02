import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NewPost from "./NewPost";
import "./PostDetails.css";
import PostEditForm from "./PostEditForm";

function PostDetails({ posts }) {
  const [isEditing, setIsEditing] = useState(false)
  const { postId } = useParams();
  const post = posts.find(post => post.id === +postId);
  function deletePost() {
    posts.filter(post => post.id !== postId);
    return posts;
  }

  return (
    <div className="PostDetails col-8">
      {isEditing ?
        <div>
          <h1>{post.title}</h1>
          <PostEditForm post={post} />
        </div> :
        <div className="border border-primary rounded">
          <h1>{post.title}</h1>
          <p><small><i>{post.description}</i></small></p>
          <p>{post.body}</p>
          <button className="btn btn-primary mx-1" onClick={() => setIsEditing(true)}>edit</button>
          <button className="btn btn-danger mx-1" onClick={deletePost}>delete</button>
        </div>
      }
    </div>
  )
}

export default PostDetails;