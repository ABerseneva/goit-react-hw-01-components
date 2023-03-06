import React from "react";


function FriendListItem  ({avatar, name, isOnline})  {
    return (<li className="item">
        <span className={isOnline ? "online" : "ofline"} ></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48"/>
        <p className="name">{name}</p>
    </li>)
};


export default FriendListItem;