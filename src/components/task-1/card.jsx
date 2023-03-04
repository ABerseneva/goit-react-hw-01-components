import React from "react";
import PropTypes from 'prop-types'
import "../task-1/cardModule.css"
import StatsList from './statsList'

const Card = ({ user }) => {
    const { username, tag, location, avatar, stats } = user
    return <div className="profile">
        <div className="description">
            <img src={avatar}
                alt="User avatar"
                className="avatar" />
            <h1 className="name">{username}</h1>
            <p className="tag">@{tag}</p>
            <p  className="location">{location}</p>
        </div>
        <StatsList stats={ stats }/>
    </div>
    
}

Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string
};


export default Card

