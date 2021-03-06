import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "../FriendListItem/FriendListItem";
import styles from './FriendList.module.css'

export default function FriendList({friends}){
    return (<ul className={styles.FriendList}>
        {friends.map(({avatar,name,isOnline,id})=>(
          
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
           
        ))}
</ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape(
            {id:PropTypes.number.isRequired,}
        )
    ).isRequired
}