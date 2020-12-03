import React from "react";
import { useDispatch } from "react-redux";
import { updateVoteWithApi } from "./actionCreators";
import "./PostVotes.css";

function PostVotes({ post }) {
  const dispatch = useDispatch();

  function handleClick(evt) {
    const voteDirection = evt.target.getAttribute("id");

    if (voteDirection === "up") {
      dispatch(updateVoteWithApi(post.id, "up"))
    } else if (voteDirection === "down") {
      dispatch(updateVoteWithApi(post.id, "down"));
    }
  }

  return (
    <div className="PostVotes d-flex">
      <p>{post.votes} votes</p>
      <div className="mx-2">
        <i className="fas fa-thumbs-up mx-1 text-primary" id="up" onClick={handleClick}></i>
        <i className="fas fa-thumbs-down mx-1 text-danger" id="down" onClick={handleClick}></i>
      </div>
    </div>
  )
}

export default PostVotes;