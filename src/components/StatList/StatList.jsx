import React from 'react';
import PropTypes from 'prop-types';
import StatItem from '../StatItem/StatItem';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const StatList = ({ data }) => {
  return (
    <ul className="stat-list">
      {data.map(item => (
        <StatItem
          key={item.id}
          color={getRandomHexColor()}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
};

export default StatList;

StatList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
