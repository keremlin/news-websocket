import React from 'react'
import {ReactComponent as SmileIcon} from './smile-beam.svg'

export default function Smile(props){
    return(<SmileIcon height={props.height} width={props.width}></SmileIcon>);
}