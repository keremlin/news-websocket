import React from 'react'
import styles from './userStatus.module.css'
import Allusers from './allUsers/allUsers'
import CurrentUser from './currentUser/currentUser'
import SVG from '../../svg/SVG'
import Window from './window/window'
import ToggleSwitch from '../../toggleSwitch/toggleSwitch'

export default function UserStatus(props) {
    return (
        <>

            <Window title="Current User">
                <CurrentUser isOnline={props.isOnline}></CurrentUser>
            </Window>
            <Window title="Online Users">
                <Allusers isOnline={props.isOnline}></Allusers>
            </Window>
            <Window title="Switches">
                <ToggleSwitch label="Engine"></ToggleSwitch>
                <ToggleSwitch label="Heater"></ToggleSwitch>
                <ToggleSwitch label="Wires"></ToggleSwitch>
            </Window>

        </>
    );


}