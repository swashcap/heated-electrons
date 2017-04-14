import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Link, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import About from '../components/About';

export default class Root extends Component {
  render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <header role="banner">
              <h1>heated-electron</h1>
              <p>🔥⚛️ Hot reloading with Electron, React & Redux.</p>
              <nav role="navigation">
                <ul>
                  <li><Link to="/">Dashboard</Link></li>
                  <li><Link to="about">About</Link></li>
                </ul>
              </nav>
            </header>

            <main role="main">
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
            </main>

            <footer role="contentinfo">
              <small>A sample project to figure out silly hot reloading by <a href="http://swashcap.com">Cory Reed</a>.</small>
              <small><a href="https://github.com/swashcap/heated-electrons">Source on GitHub</a>.</small>
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

