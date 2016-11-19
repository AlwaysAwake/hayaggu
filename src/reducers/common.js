import * as ActionTypes from '../constants/actions';


const initialState = { currentWeekOffset: 0, isFetching: false };

const common = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DEMOS:
      return { ...state, currentWeekOffset: action.nextWeekOffset };

    case ActionTypes.FETCH_COMMENTS:
    case ActionTypes.WRITE_COMMENT:
      return { ...state, isFetching: true };

    case ActionTypes.SET_COMMENTS:
    case ActionTypes.ADD_COMMENT:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default common;