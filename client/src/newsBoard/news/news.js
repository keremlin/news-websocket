import React from 'react'
import  './news.css'
import SVG from '../../svg/SVG'

  export default function News(props) {
     return (
        <>
           { props.news.map((value, index) =>
              <div key={index} className="box row">
                
                 <div className="col-md-2"> {
                    (value.type===2?<SVG icon="smile" width="30" height="30"></SVG>:<SVG icon="information" width="30" height="30"></SVG>)
                 } {value.user}</div>
                 <div className="col-md-8"> {value.message}</div>
                 <div className="col-md-2"> {value.date}</div>
              </div>
            )}
        </>
     );
 }