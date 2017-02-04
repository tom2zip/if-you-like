import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import reducer from './reducers';

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
