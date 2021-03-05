import React, { useState, useEffect } from "react"
import styles from "./allUsers.module.css"
import { ReactComponent as NotAvailable } from './meh-regular.svg'
import { ReactComponent as SmileBeam } from './smile-beam.svg'


export default function Allusers() {
    console.log('Alluser was refresh');
    const [listOfUsers, setListOfusers] = useState('["0"]');
    const [listOfOnlineUsers, setListOfOnlineusers] = useState('["0"]');
    var list=['Anonymouse'];
    var onlinelist=['Anonymouse'];
    useEffect(() => {
        fetch("/api/getAllUsers")
            .then((body) => {
                return body.text();
            })
            .then((result) => {
                setListOfusers(result);
            });
            fetch("/api/getOnlineUsers")
            .then((body) => {
                return body.text();
            })
            .then((onlineResult) => {
                setListOfOnlineusers(onlineResult);
            });
    });
    list=JSON.parse(listOfUsers);
    onlinelist=JSON.parse(listOfOnlineUsers);    
    console.log(onlinelist);
    const listItems= list.map((item) =>
        <div>
            {onlinelist.indexOf(item) ?
                <NotAvailable className={styles.offline} width="20" height="20"></NotAvailable> :
                <SmileBeam className={styles.emoji} width="20" height="20"></SmileBeam>
            }
            {item}
        </div>
    );
    return (
        <div className={styles.allUsers}>
            <span>{listItems}</span>
        </div>
    );
}