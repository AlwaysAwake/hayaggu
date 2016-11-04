import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { configureStore } from './store/configureStore';
import routes from './routes';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();


render((
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'));