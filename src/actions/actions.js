import fetch from 'isomorphic-fetch';
import { replace } from 'react-router-redux';

import * as ActionTypes from '../constants/actions';
import { baseURL } from '../constants/api';
import { parseJSON, checkStatus } from '../utils/promiseMiddleware';


function setDemos(json) {
  return {
    type: ActionTypes.SET_DEMOS,
    demos: json.demo_list,
  };
}

export function fetchDemos() {
  return dispatch => {
    return fetch(`${baseURL}/demo/list`)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(setDemos(json)))
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
