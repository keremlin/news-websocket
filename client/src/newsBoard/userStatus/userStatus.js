import React, { useState, useEffect } from 'react'
import './userStatus.css'

export default function UserStatus() {
    const [userName,setUserName]=useState('0');
    useEffect(() => {
        fetch("http://localhost:8080/getCurrentUserName")
        .then(res=>res.text)
        .then(
            (result)=>{
                setUserName(result);
            }
        );
    });

    return (
        <div>User Name: {userName}</div>
    );


}