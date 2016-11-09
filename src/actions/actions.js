import fetch from 'isomorphic-fetch';
import { replace } from 'react-router-redux';

import * as ActionTypes from '../constants/actions';
import { baseURL } from '../constants/api';
import { parseJSON, checkStatus } from '../utils/promiseMiddleware';
import { getWeekRange } from '../utils/time';


function setDemos(json, nextWeekOffset) {
  return {
    type: ActionTypes.SET_DEMOS,
    demos: json.demo_list,
    nextWeekOffset,
  };
}

export function fetchDemos(nextWeekOffset = 0) {
  return (dispatch, getState) => {
    const weekRange = getWeekRange(new Date(), nextWeekOffset);
    
    dispatch({ type: ActionTypes.FETCH_DEMOS });
    return fetch(`${baseURL}/demo/list?start=${weekRange.start}&end=${weekRange.end}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(setDemos(json, nextWeekOffset)))
      .catch(error => console.error(error));
  };
}

export function selectDemo(clickedDemo) {
  return (dispatch, getState) => {
    const { demos: { demos, selectedDemo } } = getState();

    return dispatch({
      type: ActionTypes.SELECT_DEMO,
      demo: selectedDemo.id === clickedDemo.id ? {} : demos.find(demo => demo.id === clickedDemo.id),
    });
  };
}

export function toggleDialog() {
  return { type: ActionTypes.TOGGLE_DIALOG };
}
