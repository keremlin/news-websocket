import React from 'react'
import styles from './userStatus.module.css'
import Allusers from './allUsers/allUsers'
import CurrentUser from './currentUser/currentUser'
import SVG from '../../svg/SVG'

export default function UserStatus(props) {
    return (
        <>
            <div className={styles.statusHeader}>
                <span>Current User</span>
                <span><SVG icon="minimize" height="12" width="12"></SVG></span>
            </div>
            <div className={styles.status}>
                <CurrentUser isOnline={props.isOnline}></CurrentUser>
            </div>


            <div className={styles.statusHeader}>
                <span>Online Users</span> 
                <span><SVG icon="minimize" height="12" width="12"></SVG></span>
            </div>
            <div className={styles.status}>
                <Allusers isOnline={props.isOnline}></Allusers>
            </div>
        </>
    );


}