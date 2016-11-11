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

    case ActionTypes.SELECT_DEMO_BY_ID:
      return {
        ...state,
        selectedDemo: action.demo,
        demos: [
          action.demo,
          ...state.demos.filter(d => d.id !== action.demo.id),
        ],
      };

    default:
      return state;
  }
};

export default demos;