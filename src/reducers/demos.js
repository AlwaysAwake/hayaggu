import * as ActionTypes from '../constants/actions';


const initialState = [];

const demos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DEMOS:
      return action;

    default:
      return state;
  }
};

export default demos;