import * as ActionTypes from '../constants/actions';
import { commentFetchCount } from '../constants/api';


const initialState = { comments: [], commentFetchOffset: 0, noMoreComment: false };

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_COMMENTS:
      return {
        ...state,
        commentFetchOffset: state.commentFetchOffset + commentFetchCount,
        comments: [
          ...state.comments,
          ...action.comments,
        ],
        noMoreComment: action.comments.length === 0,
      };

    case ActionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: [
          action.comment,
          ...state.comments,
        ],
      };

    default:
      return state;
  }
}

export default comments;