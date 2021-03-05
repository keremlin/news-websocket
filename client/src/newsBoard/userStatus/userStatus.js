import React from 'react'
import styles from './userStatus.module.css'
import Allusers from './allUsers/allUsers'
import CurrentUser from './currentUser/currentUser'

export default function UserStatus() {
    return (
        <div className={styles.status}>
        <CurrentUser></CurrentUser>
        <Allusers></Allusers>
        </div>
    );


}