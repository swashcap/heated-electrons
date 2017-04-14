import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
debugger;

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root history={history} store={store} />,
  document.getElementById('app')
);

