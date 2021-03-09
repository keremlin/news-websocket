import React from 'react'
import styles from './userStatus.module.css'
import Allusers from './allUsers/allUsers'
import CurrentUser from './currentUser/currentUser'

export default function UserStatus(props) {
    return (
        <div className={styles.status}>
        <CurrentUser isOnline={props.isOnline}></CurrentUser>
        <Allusers isOnline={props.isOnline}></Allusers>
        </div>
    );


}