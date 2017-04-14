import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import history from './history';
import Root from './containers/Root';

import 'normalize.css/normalize.css';
import './heated-electron.css';

const store = configureStore();
const rootEl = document.getElementById('app');

render(
  <Root history={history} store={store} />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <NextRoot history={history} store={store} />,
      rootEl
    );
  });
}
