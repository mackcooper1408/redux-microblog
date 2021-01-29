import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import CommentForm from "../../CommentForm";
import "./PostDetails.css";
import PostEditForm from "../PostEditForm";
import {
  getSinglePostFromApi,
  deletePostWithApi,
  getCommentsFromAPI,
  addCommentWithApi,
  deleteCommentWithApi,
  updatePostWithApi,
} from "../../actions/actionCreators";
import PostVotes from "../PostVotes";

/**
 * Display details about a post
 *
 * - allows for adding / deleting comments
 * - allows for adding / deleting categories
 * - allows for editing / deleting post
 */
function PostDetails() {
  // setting react component state
  const [isEditing, setIsEditing] = useState(false);

  // react router
  const history = useHistory();
  const { postId } = useParams();
  const dispatch = useDispatch();

  // grabbing state from redux
  const post = useSelector((store) => store.posts.posts[postId]);
  const comments = useSelector((store) => store.comments.comments[postId]);

  useEffect(() => {
    // if (!post || post.id) dispatch(getSinglePostFromApi(postId));
    dispatch(getSinglePostFromApi(postId));
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

  function handleDeleteCategory() {
    dispatch(updatePostWithApi(postId, { ...post, category: "" }));
  }

  if (post && post.hasOwnProperty("msg")) return <Redirect to="/404" />;
  if (!post || !comments) return <div>LOADING</div>;

  return (
    <div className="PostDetails col-10 mt-2">
      {isEditing ? (
        <div>
          <h1>{post.title}</h1>
          <PostEditForm post={post} postId={postId} />
        </div>
      ) : (
        <div>
          <div className="card-body border border-primary rounded py-2">
            <h1>{post.title}</h1>
            <p>
              <small>
                <i>{post.description}</i>
              </small>
            </p>
            <p>{post.body}</p>
            <button
              className="btn btn-primary btn-sm mx-1"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
            <button
              className="btn btn-danger btn-sm mx-1"
              onClick={handlePostDelete}
            >
              delete
            </button>
            <div className="PostDetails-votes card-footer mt-2">
              <PostVotes post={post} />
            </div>
            <div className="d-flex flex-row justify-content-between">
              Category:
              {post.category && (
                <div className="PostDetails-category card flex-row justify-content-between align-items-baseline">
                  {post.category}
                  <i
                    className="fas fa-trash-alt mx-2 text-danger"
                    onClick={handleDeleteCategory}
                  ></i>
                </div>
              )}
            </div>
          </div>
          <hr />
          <p>Comments:</p>
          <ul className="list-group my-2">
            {comments.map((c) => (
              <li className="PostDetails-comment list-group-item" key={c.id}>
                <i
                  className="fas fa-trash-alt"
                  onClick={handleDeleteComment}
                  id={c.id}
                ></i>
                {c.text}
              </li>
            ))}
          </ul>
          <CommentForm addComment={handleAddComment} />
        </div>
      )}
    </div>
  );
}

export default PostDetails;
