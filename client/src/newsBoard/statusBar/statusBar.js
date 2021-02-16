import React from 'react'
import  './statusBar.css'
import {ReactComponent as Online} from './wifi-solid.svg'
import {ReactComponent as Clock} from './clock-regular.svg'

export default class StatusBar extends React.Component {
    state={
        counter:0
        ,lastTime:""
        ,connected:false
    }
    componentDidMount() {
        //check if time is not changeing after 5s the server is not reachable.
        this.myInterval = setInterval(() => {
            if (this.state.lastTime === this.props.serverTime || this.props.serverTime==="no data") {
                this.setState({ connected: false });
            }
            else {
                this.setState({ connected: true });
                this.setState({ lastTime: this.props.serverTime });
            }
        }, 5000);
    }

    render() {
        return (
            <div className="statusBar">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 colorGreen"><Clock width="20" height="20"></Clock> {this.props.serverTime}</div>
                    <div className="col-md-2">
                        <span className={this.state.connected?"colorGreen":"colorRed"}>
                            <Online width="20" height="20"></Online>
                            <span>
                                {this.state.connected ? 'Connected' : 'NOT Connected'}
                            </span>
                            
                        </span>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}