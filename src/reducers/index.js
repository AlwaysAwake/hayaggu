import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import demos from './demos';
import comments from './comments';
import catchwords from './catchwords';

export default combineReducers({
  common,
  demos,
  comments,
  catchwords,
  routing: routerReducer,
});