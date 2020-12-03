import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import "./PostDetails.css";
import PostEditForm from "./PostEditForm";
import { deletePost, addComment, deleteComment, getSinglePostFromApi } from "./actionCreators";

function PostDetails() {
  // setting react component state
  const [isEditing, setIsEditing] = useState(false);

  // react router
  const history = useHistory();
  const { postId } = useParams();
  const dispatch = useDispatch();

  // grabbing state from redux
  const post = useSelector(store => store.posts[postId]);

  useEffect(() => {
    dispatch(getSinglePostFromApi(postId));
  }, [dispatch]);

  /** uses singleKey and deletes the post
   * from the posts object in the store with redux */
  function handlePostDelete() {
    dispatch(deletePost(postId));
    history.push("/");
  }

  /** adds comment to comment list
   * 
   * @param comment {string}
   *    new comment to add for specific post
   */
  function handleAddComment(comment) {
    dispatch(addComment(postId, comment));
  }

  /** grabs the parentNode of the clicked icon
   * and removes the comment from the comment state. */
  function handleDeleteComment(evt) {
    const deletedComment = evt.target.parentNode.innerText;
    dispatch(deleteComment(postId, deletedComment));
  }

  if (!post) return <div>LOADING</div>;

  return (
    <div className="PostDetails col-8 mt-2">
      {isEditing ?
        <div>
          <h1>{post.title}</h1>
          <PostEditForm post={post} postId={postId} />
        </div> :
        <div>
          <div className="border border-primary rounded py-2">
            <h1>{post.title}</h1>
            <p><small><i>{post.description}</i></small></p>
            <p>{post.body}</p>
            <button
              className="btn btn-primary btn-sm mx-1"
              onClick={() => setIsEditing(true)}>edit</button>
            <button
              className="btn btn-danger btn-sm mx-1"
              onClick={handlePostDelete}>delete</button>
          </div>
          <hr />
          {/* <p>Comments:</p>
          <ul className="list-group my-2">
            {post.comments.map((c, i) => (
              <li className="PostDetails-comment list-group-item" key={i}>
                <i className="fas fa-trash-alt" onClick={handleDeleteComment}></i>
                {c}
              </li>
            ))}
          </ul>
          <CommentForm addComment={handleAddComment} /> */}
        </div>
      }
    </div>
    // <div>HELLO</div>
  )
}

export default PostDetails;