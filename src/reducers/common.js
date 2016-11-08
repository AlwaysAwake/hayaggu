import * as ActionTypes from '../constants/actions';


const initialState = { currentWeekOffset: 0 };

const common = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DEMOS:
      return { ...state, currentWeekOffset: action.nextWeekOffset };

    default:
      return state;
  }
};

export default common;