import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsFromAPI } from "./actionCreators";
import PostVotes from "./PostVotes";
import "./PostList.css";
import { useState } from "react";
import PostListPagination from "./PostListPagination";

function PostList() {
  const ITEMS_PER_PAGE = 3;

  const posts = useSelector(store => store.posts.titles);
  const sortedPosts = posts.sort((a, b) => b.votes - a.votes);
  const [sliceValues, setSliceValues] = useState({ start: 0, end: ITEMS_PER_PAGE });
  const slicedPosts = sortedPosts.slice(sliceValues.start, sliceValues.end);


  const dispatch = useDispatch();

  // if we don't have posts populating the store, we run the useEffect
  // and make an api call to fill the titles.  Once its been filled, we use
  // the store to keep it updated and no longer need to keep making api calls.
  useEffect(() => {
    if (posts.length === 0) dispatch(getPostsFromAPI());
  }, [dispatch]);

  function slicePosts(start, end) {
    setSliceValues({ start, end });
  }

  return (
    <div>
      {slicedPosts.map(post => (
        <div className="col-12 mb-2" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                <Link to={`/${post.id}`}>{post.title}</Link>
              </h2>
              <p><small><i>{post.description}</i></small></p>
              <div className="PostList-votes card-footer">
                <PostVotes post={post} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <PostListPagination
        listLength={sortedPosts.length}
        slicePosts={slicePosts}
        itemsPerPage={ITEMS_PER_PAGE}/>
    </div>
  )
}

export default PostList;