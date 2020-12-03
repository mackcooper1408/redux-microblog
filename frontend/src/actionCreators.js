import { ADD_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

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

export function addComment(id, comment) {
  return {
    type:ADD_COMMENT,
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