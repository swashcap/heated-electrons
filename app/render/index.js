import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Root history={history} store={store} />,
  document.getElementById('app')
);

