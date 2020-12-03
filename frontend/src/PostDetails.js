import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import "./PostDetails.css";
import PostEditForm from "./PostEditForm";
import { getSinglePostFromApi, deletePostWithApi, getCommentsFromAPI, addCommentWithApi, deleteCommentWithApi } from "./actionCreators";

function PostDetails() {
  // setting react component state
  const [isEditing, setIsEditing] = useState(false);

  // react router
  const history = useHistory();
  const { postId } = useParams();
  const dispatch = useDispatch();

  // grabbing state from redux
  const post = useSelector(store => store.posts[postId]);
  const comments = useSelector(store => store.comments[postId]);

  useEffect(() => {
    if (!post) dispatch(getSinglePostFromApi(postId));
    if (!comments) dispatch(getCommentsFromAPI(postId));
  }, [dispatch]);

  /** uses singleKey and deletes the post
   * from the posts object in the store with redux */
  function handlePostDelete() {
    dispatch(deletePostWithApi(postId));
    history.push("/");
  }

  /** adds comment to comment list
   * 
   * @param comment {string}
   *    new comment to add for specific post
   */
  function handleAddComment(comment) {
    dispatch(addCommentWithApi(postId, comment));
  }

  /** grabs the parentNode of the clicked icon
   * and removes the comment from the comment state. */
  function handleDeleteComment(evt) {
    //need to find the comment ID from here
    console.log(evt.target.getAttribute("id"));
    const deletedId = evt.target.getAttribute("id");
    dispatch(deleteCommentWithApi(postId, deletedId));
  }

  if (!post || !comments) return <div>LOADING</div>;

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
          <p>Comments:</p>
          <ul className="list-group my-2">
            {comments.map(c => (
              <li className="PostDetails-comment list-group-item" key={c.id} >
                <i className="fas fa-trash-alt" onClick={handleDeleteComment} id={c.id}></i>
                {c.text}
              </li>
            ))}
          </ul>
          <CommentForm addComment={handleAddComment} />
        </div>
      }
    </div>
  )
}

export default PostDetails;