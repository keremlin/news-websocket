import React from 'react'
import  './news.css'

  export default function News(props) {
     return (
        <>
           { props.news.map((value, index) =>
              <div key={index} className="box row">
                 <div className="col-md-4">User : {value.user}</div>
                 <div className="col-md-8">Event : {value.message}</div>
                 <div className="col-md-4">Date : {value.date}</div>
              </div>
            )}
        </>


     );
 }