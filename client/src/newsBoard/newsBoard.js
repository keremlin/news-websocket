import React from 'react'
import  './newsBoard.css'

 export default class NewsBoard extends React.Component{

      render(){let i=0;
    return(
        
        <div className="newsBoard">
            
            {this.props.news.map((value) =>
                <div className="test" key={i++}>{value}</div>
            )}
        </div>)
      }
    
 }