import React from 'react';
import PropTypes from 'prop-types';
import '../Card/CardModule.css';
import StatsList from './StatsList';

const Card = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <h1 className="name">{username}</h1>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <StatsList stats={stats} />
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Card;
