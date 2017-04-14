import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const App = ({ children }) => (
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
      {children}
    </main>

    <footer role="contentinfo">
      <small>A sample project to figure out silly hot reloading by <a href="http://swashcap.com">Cory Reed</a>.</small>
      <small><a href="https://github.com/swashcap/heated-electrons">Source on GitHub</a>.</small>
    </footer>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;

