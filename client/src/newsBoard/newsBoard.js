import React from 'react'
import  './newsBoard.css'
import News from './news/news'
import StatusBar from './statusBar/statusBar'
import UserStatus from './userStatus/userStatus'
import AddNews from './addNews/addNews'
import Window from './userStatus/window/window'

 export default class NewsBoard extends React.Component{

    
     render() {
         return (
             <>
                 <div className="newsBoard row">
                     <div className="col-md-2">
                         <Window title='Actions'>
                             <div><AddNews sendNews={this.props.sendNews}></AddNews></div>
                             
                         </Window>
                     </div>
                     <div className="col-md-8">
                         <News news={this.props.news}></News>
                     </div>
                     <div className="col-md-2">
                         <UserStatus isOnline={this.props.isOnline}></UserStatus>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-md-4"></div>
                     <div className="col-md-4"> </div>
                     <div className="col-md-4"></div>
                 </div>
                  <StatusBar serverTime={this.props.serverTime}></StatusBar>
             </>
         )
     }
    
 }
