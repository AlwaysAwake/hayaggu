import * as ActionTypes from '../constants/actions';


const initialState = [];

const catchwords = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CATCHWORDS:
      return action.catchwords;

    default:
      return state;
  }
};

export default catchwords;