import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsFromAPI } from "./actionCreators";
import PostVotes from "./PostVotes";
import "./PostList.css";

function PostList() {
  const posts = useSelector(store => store.posts.titles);
  const sortedPosts = posts.sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();
  
  // if we don't have posts populating the store, we run the useEffect
  // and make an api call to fill the titles.  Once its been filled, we use
  // the store to keep it updated and no longer need to keep making api calls.
  useEffect(() => {
    if (posts.length === 0) dispatch(getPostsFromAPI());
  }, [dispatch]);

  return (
    <div>
      {sortedPosts.map(post => (
        <div className="col-12 mb-2" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                <Link to={`/${post.id}`}>{post.title}</Link>
              </h2>
              <p><small><i>{post.description}</i></small></p>
              <div className="PostList-votes card-footer">
                <PostVotes post={post}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList;