import React, { useState } from 'react'
import styles from './addNews.module.css'
import Modalx from '../../modal/modalx'
import Button from 'react-bootstrap/Button';
import SVG from '../../svg/SVG';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function AddNews(props) {
    //using hooks to hold value
    const [name, setName] = useState("");
    const [showModalx,setShowModalx]=useState(false);
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
    // on press news button
    const onClickNews=()=>{
        setShowModalx(false);
        sendData(name);
    }
    const onClickClose=()=>{
        setShowModalx(false);
    }
    const forms= <div>
            <label className={styles.buttonMargin}>Send An Event  </label>
            <input type="text" id="newsMessage"
                onChange={onChange}
                value={name}
                onKeyDown={props.onPressEnter ? props.onPressEnter : onKeyDownNews}
            >  
            </input>
            <Button className={styles.buttonMargin} onClick={onClickNews}>Send {'>>'}</Button>
        </div>
        const footer=<div>
            <Button className={styles.buttonMargin} variant="secondary" onClick={onClickClose}>
            Close
          </Button>
            <Button className={styles.buttonMargin} variant="primary" onClick={onClickNews}>
              Send Event
            </Button>
          
        </div>
    //render
    return (
        <>
            <ListItem button onClick={()=>setShowModalx(true)}>
              <ListItemIcon><AddCircleOutlineIcon></AddCircleOutlineIcon></ListItemIcon>
              <ListItemText primary="Create Event" />
            </ListItem>
            <Modalx onClickSave={clickHandlerNews}
                body={forms} footer={footer} title="Send an Event" closeButton="Close" saveButton="Send event" showModalx={showModalx} button="Create event !">
            </Modalx>
        </>
    );
}