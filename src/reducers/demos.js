import * as ActionTypes from '../constants/actions';


const initialState = { demos: [], selectedDemo: {} };

const demos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DEMOS:
      return { ...state, demos: action.demos };

    case ActionTypes.FETCH_DEMOS:
      return { ...state, selectedDemo: {} };

    case ActionTypes.SELECT_DEMO:
      return { ...state, selectedDemo: action.demo };

    default:
      return state;
  }
};

export default demos;