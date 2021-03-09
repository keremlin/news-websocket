import React, { useState, useEffect } from 'react'
import styles from './currentUser.module.css'
import { ReactComponent as SmileBeam } from './smile-beam.svg'

export default function CurrentUser(props) {

    const [userName, setUserName] = useState('Anonymouse');

    useEffect(() => {
        if (props.isOnline && userName=='Anonymouse' )
        try{
            fetch("/api/getCurrentUserName")
                .then((body) => {
                    return body.text();
                })
                .then(
                    (result) => {
                        setUserName(result);
                    }
                );
        }
        catch(error){console.log(error)}
    });
    return (
        <div className={styles.currentUser}>
            <SmileBeam width="20" height="20"></SmileBeam>
            <span> {userName}</span>
        </div>
    );
}