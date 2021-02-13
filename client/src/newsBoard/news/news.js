import React from 'react'
import  './news.css'

  export default function News(props) {
        return(
           <p>this is news {props.news.map((value,index)=><div key={index}>{value}</div>)}</p>
        );
 }