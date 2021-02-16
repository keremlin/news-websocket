import React from  'react'
import './header.css'
import ico from './dc.svg'
export default function Header(){
    return(
        <>
            <header className="App-header">
                <div className="landing-container-logo-wrapper">
                    <img src={ico} width="70" height="70" className="App-logo"></img>
                </div>
            </header>
        </>
    );
}