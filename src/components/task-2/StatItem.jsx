import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';


function StatItem({ label, percentage, color }) {
  return (
    <Item color={color}>
      <Text>{label}</Text>
      <Text>{percentage}</Text>
    </Item>
  );
}

export default StatItem;

const Item = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  margin: 0;
  background-color: ${props => props.color};
`;

const Text = styled.span`
  color: white;
`;


StatItem.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};