import React from 'react';
import PropTypes from 'prop-types';
import StatList from '../StatList/StatList';
import '../Statistics/StatisticsModule.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}
      {/* title && <h2 className="title">{title}</h2> */}
      <StatList data={stats} />
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
