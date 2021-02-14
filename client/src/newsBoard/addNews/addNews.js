import React from 'react'
import  './addNews.css'

 export default function AddNews(props){
    
        return(
            <p>
                <input type="text" id="newsMessage" onChange={props.onChange} value={this.state.newsMessage} onKeyDown={props.onPressEnter}></input>
                <button onClick={props.onClick}>news</button>
            </p>
        );
    

 }