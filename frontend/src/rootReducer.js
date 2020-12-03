import { ADD_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_TITLES, LOAD_SINGLE_POST } from "./actionTypes"

const INITIAL_STATE = {
  posts: {},
  titles: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TITLES:
      return {
        ...state,
        titles: action.posts
      }

    case LOAD_SINGLE_POST:
      return{
        ...state,
        posts: {...state.posts, [action.post.id]: action.post}
      }

    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.postDetails
        },
        titles: [...state.titles, action.postDetails]
      };

    case DELETE_POST:
      const postsListCopy = { ...state.posts };
      delete postsListCopy[action.id];

      const newTitles = state.titles.filter(title => title.id !== action.id);
      return { ...state, posts: postsListCopy, titles: newTitles };

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
