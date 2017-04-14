import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route } from 'react-router';

import App from '../components/App';
import Dashboard from './Dashboard';
import About from '../components/About';

const Root = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Root;

