import React, { useState, useEffect } from 'react'
import './userStatus.css'

export default function UserStatus() {
    const [userName,setUserName]=useState('0');
    const[listOfUsers,setListOfUsers]=useState([]);
    useEffect(() => {
        fetch("/api/getCurrentUserName")
        .then((body)=>{
            return body.text(); 
          })
        .then(
            (result)=>{
                setUserName(result);
            }
        );
        fetch("/api/getAllUsers")
        .then((body)=>{
            return body.text();
        })
        .then((result)=>{
            setListOfUsers(result);
        });
    });

    return (
        <>
        <div>User Name: {userName}</div>
        <div>User All: {listOfUsers}</div>
        </>
    );


}