import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/index';
import { DevTools } from '../containers';


export const configureStore = (history, initialState = {}) => {
  let finalCreateStore;
  const middlewares = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
    finalCreateStore = compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    )(createStore);
  } else {
    finalCreateStore = applyMiddleware(...middlewares)(createStore);
  }

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
