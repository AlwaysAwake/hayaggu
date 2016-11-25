import fetch from 'isomorphic-fetch';
import { replace } from 'react-router-redux';
import noop from 'lodash/noop';

import * as ActionTypes from '../constants/actions';
import { baseURL, commentFetchCount } from '../constants/api';

import { parseJSON, checkStatus } from '../utils/promiseMiddleware';
import { getWeekRange, checkRecentCommentExists } from '../utils/time';
import { searchParams } from '../utils/formatter';


function setRecentCommentExist() {
  return { type: ActionTypes.SET_RECENT_COMMENT_EXIST };
}

export function clearRecentCommentExist() {
  return { type: ActionTypes.CLEAR_RECENT_COMMENT_EXIST };
}

export function checkRecentComments() {
  return dispatch => {
    dispatch({ type: ActionTypes.CHECK_RECENT_COMMENTS });

    return fetch(`${baseURL}/comment/list?count=1&offset=0`)
      .then(checkStatus)
      .then(parseJSON)
      .then(json =>
        json.comments.length >= 1 && checkRecentCommentExists(json.comments[0].cdate)
          ? dispatch(setRecentCommentExist())
          : noop
      )
      .catch(error => console.error(error));
  };
}

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

export function selectDemoById(id) {
  return (dispatch, getState) => {
    const { demos: { demos } } = getState();

    return dispatch({
      type: ActionTypes.SELECT_DEMO_BY_ID,
      demo: demos.find(d => d.id === id),
    });
  };
}

function setComments(json) {
  return {
    type: ActionTypes.SET_COMMENTS,
    comments: json.comments,
  };
}

export function fetchComments() {
  return (dispatch, getState) => {
    const { comments: { commentFetchOffset } } = getState();

    dispatch({ type: ActionTypes.FETCH_COMMENTS });
    
    return fetch(`${baseURL}/comment/list?count=${commentFetchCount}&offset=${commentFetchOffset}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(setComments(json)))
      .catch(error => console.error(error));
  };
}

export function addComment(json) {
  return {
    type: ActionTypes.ADD_COMMENT,
    comment: json.comment,
  };
}

export function writeComment({ content }) {
  return dispatch => {
    dispatch({ type: ActionTypes.WRITE_COMMENT });

    return fetch(`${baseURL}/comment/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: searchParams({
        demo_id: 1,
        writer: 'Hayaggu',
        content,
      }),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(addComment(json)))
      .catch(error => console.error(error));
  };
}

function setCatchwords(json) {
  return {
    type: ActionTypes.SET_CATCHWORDS,
    catchwords: json.blinkers,
  };
}

export function fetchCatchwords() {
  return dispatch => {
    dispatch({ type: ActionTypes.FETCH_CATCHWORDS });

    return fetch(`${baseURL}/blinker/list`)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(setCatchwords(json)))
      .catch(error => console.error(error));
  };
}

export function addCatchwordCount({ content }) {
  return dispatch => {
    dispatch({ type: ActionTypes.ADD_CATCHWORD_COUNT });

    return fetch(`${baseURL}/blinker/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: searchParams({ content }),
    });
  }
}
