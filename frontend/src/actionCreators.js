import { ADD_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_POSTS, LOAD_COMMENTS, LOAD_SINGLE_POST } from "./actionTypes";
import microBlogApi from "./api";

export function getPostsFromAPI() {
  return async function (dispatch) {
    // dispatch(startLoad());
    try {
      const res = await microBlogApi.getAllPosts();
      dispatch(gotPosts(res));
    }
    catch (err) {
      alert(err);
    }
  }
}

export function getSinglePostFromApi(postId) {
  return async function (dispatch) {
    try {
      const res = await microBlogApi.getPost(postId);
      dispatch(gotAPost(res));
    } catch (err) {
      alert(err);
    }
  }
}

export function getCommentsFromAPI() {
  return async function (dispatch) {
    // dispatch(startLoad());
    try {
      let res = await microBlogApi.getAllComments();
      dispatch(gotComments(res));
    }
    catch (err) {
      alert(err);
    }
  }
}
/************************************************************** */

function gotPosts(posts){
  return {type: LOAD_POSTS, posts};
}

function gotAPost(post) {
  return {type: LOAD_SINGLE_POST, post}
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function addPost(id, postDetails) {
  return {
    type: ADD_POST,
    id,
    postDetails
  }
}

/************************************************************** */

function gotComments(comments) {
  return { type: LOAD_COMMENTS, comments };
}


export function addComment(id, comment) {
  return {
    type: ADD_COMMENT,
    id,
    comment
  }
}
export function deleteComment(id, comment) {
  return {
    type: DELETE_COMMENT,
    id,
    comment
  }
}