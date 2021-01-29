import {
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_TITLES,
  LOAD_COMMENTS,
  LOAD_SINGLE_POST,
  UPDATE_POST,
  UPDATE_VOTE,
  HANDLE_ERROR,
} from "./actionTypes";
import microBlogApi from "../api";

export function getPostsFromAPI() {
  return async function (dispatch) {
    // dispatch(startLoad());
    try {
      const res = await microBlogApi.getAllPosts();
      dispatch(gotTitles(res));
    } catch (err) {
      alert(err);
    }
  };
}

export function getSinglePostFromApi(postId) {
  return async function (dispatch) {
    try {
      const res = await microBlogApi.getPost(postId);
      dispatch(gotAPost(res));
    } catch (err) {
      dispatch(handleError(postId, err));
    }
  };
}

export function addPostWithApi(postId, postDetails) {
  return async function (dispatch) {
    try {
      const res = await microBlogApi.addPost(postDetails);
      dispatch(addPost(postId, res));
    } catch (err) {
      alert(err);
    }
  };
}

export function updatePostWithApi(postId, postDetails) {
  return async function (dispatch) {
    try {
      const res = await microBlogApi.updatePost(postId, postDetails);
      dispatch(updatePost(postId, res));
    } catch (err) {
      alert(err);
    }
  };
}

export function deletePostWithApi(postId) {
  return async function (dispatch) {
    try {
      await microBlogApi.deletePost(postId);
      dispatch(deletePost(postId));
    } catch (err) {
      alert(err);
    }
  };
}

export function getCommentsFromAPI(postId) {
  return async function (dispatch) {
    // dispatch(startLoad());
    try {
      const res = await microBlogApi.getAllComments(postId);
      dispatch(gotComments(postId, res));
    } catch (err) {
      dispatch(handleError(postId, err));
    }
  };
}

export function addCommentWithApi(postId, commentDetails) {
  return async function (dispatch) {
    try {
      const res = await microBlogApi.addNewComments(postId, commentDetails);
      dispatch(addComment(postId, res));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}
export function deleteCommentWithApi(postId, commentId) {
  return async function (dispatch) {
    try {
      await microBlogApi.deleteComment(postId, commentId);
      dispatch(deleteComment(postId, commentId));
    } catch (err) {
      alert(err);
    }
  };
}

export function updateVoteWithApi(postId, vote) {
  return async function (dispatch) {
    try {
      const res = await microBlogApi.updateVote(postId, vote);
      dispatch(updatePostVote(postId, res.votes));
    } catch (err) {
      alert(err);
    }
  };
}

/************************************************************** */

function gotTitles(posts) {
  return { type: LOAD_TITLES, posts };
}

function gotAPost(post) {
  return { type: LOAD_SINGLE_POST, post };
}

function addPost(id, postDetails) {
  return {
    type: ADD_POST,
    id,
    postDetails,
  };
}

function updatePost(id, postDetails) {
  return {
    type: UPDATE_POST,
    id,
    postDetails,
  };
}

function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

/************************************************************** */

function gotComments(id, comments) {
  return { type: LOAD_COMMENTS, id, comments };
}

function addComment(id, comment) {
  return {
    type: ADD_COMMENT,
    id,
    comment,
  };
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId,
  };
}

function updatePostVote(id, vote) {
  return {
    type: UPDATE_VOTE,
    id,
    vote,
  };
}

function handleError(id, msg) {
  return {
    type: HANDLE_ERROR,
    id,
    msg,
  };
}
