import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import { Main, CommentsWrapper } from './containers';
import { Tips, ToiletMap } from './components';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="comments" component={CommentsWrapper} />
    <Route path="tips" component={Tips} />
    <Route path="toilet" component={ToiletMap} />
  </Route>
);