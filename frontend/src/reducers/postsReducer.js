import {
  LOAD_TITLES,
  LOAD_SINGLE_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  UPDATE_VOTE,
  HANDLE_ERROR
} from "../actionTypes";

const INITIAL_STATE = {
  posts: {},
  titles: [],
  categories: ["stupid", "fun", "adventures", "lazy"]
};

function postsReducer(state = INITIAL_STATE, action) {
  let newTitles;
  switch (action.type) {
    case LOAD_TITLES:
      return {
        ...state,
        titles: action.posts,
      };

    case LOAD_SINGLE_POST:
      return {
        ...state,
        posts: { ...state.posts, [action.post.id]: action.post }
      };

    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.postDetails
        },
        titles: [...state.titles, action.postDetails]
      };

    case UPDATE_POST:
      newTitles = state.titles
        .map(title => title.id === +action.id ? action.postDetails : title);
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.postDetails
        },
        titles: newTitles
      };

    case DELETE_POST:
      const postsListCopy = { ...state.posts };
      delete postsListCopy[action.id];

      newTitles = state.titles.filter(title => title.id !== +action.id);
      return { ...state, posts: postsListCopy, titles: newTitles };

    case UPDATE_VOTE:
      newTitles = state.titles
        .map(title => title.id === +action.id ? { ...title, votes: action.vote } : title);
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: { ...state.posts[action.id], votes: action.vote }
        },
        titles: newTitles
      };

    case HANDLE_ERROR:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: { msg: action.msg }
        }
      }

    default:
      return state;
  }
}

export default postsReducer;