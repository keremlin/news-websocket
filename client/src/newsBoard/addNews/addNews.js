import React, { useState } from 'react'
import './addNews.css'

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
    //render
    return (
        <div>
            <label>Send An Event : </label>
            <input type="text" id="newsMessage"
                onChange={onChange}
                value={name}
                onKeyDown={props.onPressEnter ? props.onPressEnter : onKeyDownNews}
            >
            </input>
            <button onClick={props.onClick ? props.onClick : clickHandlerNews}>news</button>
        </div>
    );
}