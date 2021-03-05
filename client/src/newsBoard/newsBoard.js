import React from 'react'
import  './newsBoard.css'
import News from './news/news'
import StatusBar from './statusBar/statusBar'
import UserStatus from './userStatus/userStatus'
import AddNews from './addNews/addNews'

 export default class NewsBoard extends React.Component{

    constructor(props) {
        super(props);
    }
     render() {
         return (
             <>
                 <div className="newsBoard row">
                     <div className="col-md-2">
                     </div>
                     <div className="col-md-8">
                         <News news={this.props.news}></News>
                     </div>
                     <div className="col-md-2">
                         <UserStatus></UserStatus>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-md-4"></div>
                     <div className="col-md-4"> <AddNews sendNews={this.props.sendNews}></AddNews></div>
                     <div className="col-md-4"></div>
                 </div>
                  <StatusBar serverTime={this.props.serverTime}></StatusBar>
             </>
         )
     }
    
 }
