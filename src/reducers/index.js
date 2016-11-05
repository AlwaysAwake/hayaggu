import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import demos from './demos';


export default combineReducers({
  common,
  demos,
  routing: routerReducer,
});