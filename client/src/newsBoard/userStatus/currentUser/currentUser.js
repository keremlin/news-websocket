import React, { useState, useEffect } from 'react'
import styles from './currentUser.module.css'
import { ReactComponent as SmileBeam } from './smile-beam.svg'

export default function CurrentUser() {
    console.log('current was refresh');
    const [userName, setUserName] = useState('0');

    useEffect(() => {
        fetch("/api/getCurrentUserName")
            .then((body) => {
                return body.text();
            })
            .then(
                (result) => {
                    setUserName(result);
                }
            );

    });
    return (
        <div className={styles.currentUser}>
            <SmileBeam  width="20" height="20"></SmileBeam>
            <span> {userName}</span>
        </div>
    );
}