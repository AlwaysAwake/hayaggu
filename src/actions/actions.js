import fetch from 'isomorphic-fetch';
import { replace } from 'react-router-redux';

import * as ActionTypes from '../constants/actions';
import { baseURL } from '../constants/api';
import { parseJSON, checkStatus } from '../utlis/promiseMiddleware';


function setDemos(json) {
  return {
    type: ActionTypes.SET_DEMOS,
    demos: json,
  };
}

export function fetchDemos() {
  return dispatch => {
    return fetch(`${baseURL}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(() => dispatch(setDemos))
      .catch(error => console.error(error));
  };
}