import React from 'react'
import { ReactComponent as Information } from './info-circle-solid.svg'
import { ReactComponent as Meh } from './meh-regular.svg'
import { ReactComponent as SmileIcon } from './smile-beam.svg'
import { ReactComponent as Minimize } from './compress-alt-solid.svg'

export default function SVG(props) {
    var ret = <></>;

    if (props.icon === 'smile')
        ret = <SmileIcon height={props.height} width={props.width}></SmileIcon>;
    else if (props.icon === 'meh')
        ret = ret = <Meh height={props.height} width={props.width}></Meh>;
    else if (props.icon === 'information')
        ret = ret = <Information height={props.height} width={props.width}></Information>;
    else if (props.icon === 'minimize')
        ret = ret = <Minimize height={props.height} width={props.width}></Minimize>;

    return (ret);
}