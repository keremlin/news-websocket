import React, { useState } from 'react'
import './addNews.css'
import Modalx from '../../modal/modalx'
import Button from 'react-bootstrap/Button';

export default function AddNews(props) {
    //using hooks to hold value
    const [name, setName] = useState("");
    //on click
    const clickHandlerNews = (event) => {
        event.preventDefault();
        sendData(name);
    }
    //on pressig an Enter button
    const onKeyDownNews = (event) => {
        if (event.key === 'Enter') {
            sendData(event.target.value);
        }
    }
    //on changing the value put it in the state
    const onChange = (event) => {
        setName(event.target.value);
    }
    //send data via stomp
    const sendData = (value) => {
        props.sendNews(value);
        setName("");
    }
    const forms= <div>
            <label>Send An Event : </label>
            <input type="text" id="newsMessage"
                onChange={onChange}
                value={name}
                onKeyDown={props.onPressEnter ? props.onPressEnter : onKeyDownNews}
            >  
            </input>
            <Button >news</Button>
        </div>
    //render
    return (
        <>
       
        <Modalx onClickSave={clickHandlerNews} 
        body={forms} title="Send an Event" closeButton="Close" saveButton="Send Event" button="Create event !"></Modalx>
        </>
    );
}