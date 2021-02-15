import React from 'react'
import  './statusBar.css'

export default function StatusBar(props) {
    return (
        <div>
            <p>Time : {props.serverTime}</p>
        </div>
    );
}