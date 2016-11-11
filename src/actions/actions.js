import fetch from 'isomorphic-fetch';
import { replace } from 'react-router-redux';

import * as ActionTypes from '../constants/actions';
import { baseURL } from '../constants/api';
import { parseJSON, checkStatus } from '../utils/promiseMiddleware';
import { getWeekRange } from '../utils/time';
import { searchParams } from '../utils/formatter';


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

    dispatch(fetchComments(clickedDemo.id));
    return dispatch({
      type: ActionTypes.SELECT_DEMO,
      demo: selectedDemo.id === clickedDemo.id ? {} : demos.find(demo => demo.id === clickedDemo.id),
    });
  };
}

export function selectDemoById(id) {
  return (dispatch, getState) => {
    const { demos: { demos } } = getState();

    dispatch(fetchComments(id));
    return dispatch({
      type: ActionTypes.SELECT_DEMO_BY_ID,
      demo: demos.find(d => d.id === id),
    });
  };
}

export function toggleDialog() {
  return { type: ActionTypes.TOGGLE_DIALOG };
}

function setComments(json) {
  return {
    type: ActionTypes.SET_COMMENTS,
    comments: json.comments,
  };
}

export function fetchComments(id) {
  return dispatch => {
    dispatch({ type: ActionTypes.FETCH_COMMENTS });
    
    return fetch(`${baseURL}/comment/list?demo_id=${id}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(setComments(json, id)))
      .catch(error => console.error(error));
  };
}

export function addComment(json) {
  return {
    type: ActionTypes.ADD_COMMENT,
    comment: json.comment,
  };
}

export function writeComment({ id, contents }) {
  return dispatch => {
    dispatch({ type: ActionTypes.WRITE_COMMENT });

    return fetch(`${baseURL}/comment/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: searchParams({
        demo_id: id,
        writer: 'Hayaggu',
        content: contents,
      }),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(addComment(json)))
      .catch(error => console.error(error));
  };
}
