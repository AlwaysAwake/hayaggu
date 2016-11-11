import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import demos from './demos';
import comments from './comments';


export default combineReducers({
  common,
  demos,
  comments,
  routing: routerReducer,
});