import React, { useEffect } from 'react'
import  './newsBoard.css'
import News from './news/news'
import StatusBar from './statusBar/statusBar'
import UserStatus from './userStatus/userStatus'
import AddNews from './addNews/addNews'

 export default class NewsBoard extends React.Component{

    constructor(props) {
        super(props);
    }
      render(){
          let i=0;
    return(
        
        <div className="newsBoard">
            <h1>News Board</h1>
            <News news= {this.props.news}></News>
            <UserStatus></UserStatus>
            <StatusBar></StatusBar>
            <AddNews></AddNews>
            
        </div>)
      }
    
 }
