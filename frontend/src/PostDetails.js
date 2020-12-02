import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import "./PostDetails.css";
import PostEditForm from "./PostEditForm";

function PostDetails({ posts }) {
  const [isEditing, setIsEditing] = useState(false)
  const { postId } = useParams();
  const [comments, setComments] = useState(["this sucks...", "other guy sucks i love this"]);

  const post = posts.find(post => post.id === +postId);

  function deletePost() {
    posts.filter(post => post.id !== postId);
    return posts;
  }

  function addComment(comment) {
    setComments([...comments, comment]);
  }
  function deleteComment(evt) {
    const deletedComment = evt.target.parentNode;
    console.log(deletedComment);
    const newComments = comments.filter(c => c !== deletedComment.innerText);
    setComments(newComments);
  }

  return (
    <div className="PostDetails col-8">
      {isEditing ?
        <div>
          <h1>{post.title}</h1>
          <PostEditForm post={post} />
        </div> :
        <div>
          <div className="border border-primary rounded py-2">
            <h1>{post.title}</h1>
            <p><small><i>{post.description}</i></small></p>
            <p>{post.body}</p>
            <button className="btn btn-primary btn-sm mx-1" onClick={() => setIsEditing(true)}>edit</button>
            <button className="btn btn-danger btn-sm mx-1" onClick={deletePost}>delete</button>
          </div>
          <hr />
          <p>Comments:</p>
          <ul className="list-group my-2">
            {comments.map((c, i) => (
              <li className="PostDetails-comment list-group-item" key={i}>
                <i className="fas fa-trash-alt" onClick={deleteComment}></i>
                {c}
              </li>
            ))}
          </ul>
          <CommentForm addComment={addComment} />
        </div>
      }
    </div>
  )
}

export default PostDetails;