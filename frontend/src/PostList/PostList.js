import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostsFromAPI } from "./actionCreators";
import PostVotes from "./PostVotes/PostVotes";
import "./PostList.css";
import { useState } from "react";
import PostListPagination from "./PostListPagination/PostListPagination";

function PostList() {
  const ITEMS_PER_PAGE = 3;

  const { category } = useParams();

  const posts = useSelector(store => {
    return store.posts.titles.filter(title => category ? title.category === category : true)
  });
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

  if (!slicedPosts || slicedPosts.length === 0) return <h5>Sorry, No Posts... =(</h5>;

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
              <div className="card-footer d-flex flex-row justify-content-between">
                <div className="PostList-votes">
                  <PostVotes post={post} />
                </div>
                {post.category &&
                  <div className="d-flex justify-content-end">
                    Category:
                  <div className="card mx-2 px-2">
                      <p className="card-text">{post.category}</p>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      ))}
      {sortedPosts.length > ITEMS_PER_PAGE &&
        <PostListPagination
          listLength={sortedPosts.length}
          slicePosts={slicePosts}
          itemsPerPage={ITEMS_PER_PAGE} />}
    </div>
  )
}

export default PostList;