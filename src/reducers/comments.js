import * as ActionTypes from '../constants/actions';


const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMMENTS:
    case ActionTypes.FETCH_DEMOS:
      return [];

    case ActionTypes.SET_COMMENTS:
      return action.comments;

    case ActionTypes.ADD_COMMENT:
      return [ action.comment, ...state ];

    default:
      return state;
  }
}

export default comments;