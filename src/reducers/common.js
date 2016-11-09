import * as ActionTypes from '../constants/actions';


const initialState = { currentWeekOffset: 0, isDialogOpened: false, };

const common = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DEMOS:
      return { ...state, currentWeekOffset: action.nextWeekOffset };

    case ActionTypes.TOGGLE_DIALOG:
      return { ...state, isDialogOpened: !state.isDialogOpened };

    default:
      return state;
  }
};

export default common;