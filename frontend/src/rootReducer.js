import { ADD_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes"



const INITIAL_STATE = {
  posts: {
    123: {
      title: "cool stuff",
      description: "this is cool",
      body: "WOW WOW WOW, SO COOL!",
      comments: ["this sucks...", "other guy sucks i love this"]
    },
    1243: {
      title: "cool stuff 2",
      description: "this is more cool",
      body: "honestly... not that cool...",
      comments: []
    }
  }
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.postDetails
        }
      };

    case DELETE_POST:
      const postsListCopy = { ...state.posts }
      delete postsListCopy[action.id];
      return { ...state, posts: postsListCopy };

    case ADD_COMMENT:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            comments: [...state.posts[action.id].comments, action.comment]
          }
        }
      };

    case DELETE_COMMENT:
      const newComments = state.posts[action.id].comments
        .filter(c => c !== action.comment);

      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            comments: newComments
          }
        }
      };

    default:
      return state;
  }
}

export default rootReducer;