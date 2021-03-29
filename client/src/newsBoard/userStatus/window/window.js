import React from 'react'
import styles from './window.module.css'
import SVG from '../../../svg/SVG'
export default function Window(props){
    return(
        <>
            <div className={styles.statusHeader}>
                <span>{props.title}</span>
                <span><SVG icon="minimize" height="12" width="12"></SVG></span>
            </div>
            <div className={styles.status}>
                {props.children}
            </div>
        </>
    );
}