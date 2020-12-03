import {
  LOAD_TITLES,
  LOAD_SINGLE_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  LOAD_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_VOTE
} from "./actionTypes"

const INITIAL_STATE = {
  posts: {},
  titles: [],
  comments: {}
};

function rootReducer(state = INITIAL_STATE, action) {
  let newTitles;
  switch (action.type) {
    case LOAD_TITLES:
      return {
        ...state,
        titles: action.posts,
      }

    case LOAD_SINGLE_POST:
      return {
        ...state,
        posts: { ...state.posts, [action.post.id]: action.post }
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
      }

    case DELETE_POST:
      const postsListCopy = { ...state.posts };
      delete postsListCopy[action.id];

      newTitles = state.titles.filter(title => title.id !== +action.id);
      return { ...state, posts: postsListCopy, titles: newTitles };

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

    case UPDATE_VOTE:
      console.log("IM HERE", action.vote);
      newTitles = state.titles
        .map(title => title.id === +action.id ? { ...title, votes: action.vote } : title);
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: { ...state.posts[action.id], votes: action.vote }
        },
        titles: newTitles
      }

    default:
      return state;
  }
}

export default rootReducer;
