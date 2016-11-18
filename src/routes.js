import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import { Main, CommentsWrapper } from './containers';
import { ToiletMap } from './components';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="comments" component={CommentsWrapper} />
    <Route path="toilet" component={ToiletMap} />
  </Route>
);