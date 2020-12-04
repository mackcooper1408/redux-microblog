import {
  LOAD_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../actionTypes";

const INITIAL_STATE = {
  comments: {}
};

function commentsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: { ...state.comments, [action.id]: action.comments }
      };

    case ADD_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: [...state.comments[action.id], action.comment]
        }
      };

    case DELETE_COMMENT:
      const newComments = state.comments[action.postId]
        .filter(c => c.id !== +action.commentId);

      return {
        ...state,
        comments: {
          ...state.comments,
          [action.postId]: newComments
        }
      };

    default:
      return state;
  }
}

export default commentsReducer;