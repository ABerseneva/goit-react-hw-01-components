import React from "react";
import FriendListItem from "./FriendListItem";
import '../task-3/FriendList.css'
import PropTypes from 'prop-types'


const FriendList = ({friends}) => {
    return <ul className="friend-list">
        {friends.map(item => (
            <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
            />
        ))}   
    </ul>
}


export default FriendList;


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};