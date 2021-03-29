import react from 'react'
import {useState} from 'react'
import styles from './toggleSwitch.module.css'
export default function ToggleSwitch(props) {
    const [states,setStates]=useState(false);
    return (
        <>
            <div>
                <label className={styles.minWidth}>{props.label}</label>
                <label className={styles.switch}>
                    <input type="checkbox" onClick={()=>setStates(!states)}></input>
                    <span className={styles.slider}></span>
                </label>
            </div>
        </>
    );
}