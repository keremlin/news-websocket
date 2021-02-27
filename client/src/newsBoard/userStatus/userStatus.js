import React, { useState, useEffect } from 'react'
import './userStatus.css'

export default function UserStatus() {
    const [userName,setUserName]=useState('0');
    useEffect(() => {
        fetch("http://localhost:8080/getCurrentUserName")
        .then((body)=>{
            return body.text(); // <--- THIS PART WAS MISSING
          })
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