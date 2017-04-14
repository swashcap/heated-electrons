import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ({ items }) => (
  <ul>
    {items.map(({ summary, title }, index) => (
      <li key={index}>
        <h2>{title}</h2>
        <p>{summary}</p>
      </li>
    ))}
  </ul>
);

Dashboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(({ items }) => ({ items }))(Dashboard);

