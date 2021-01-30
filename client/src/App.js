import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  ws = new WebSocket('ws://localhost:8080/chat');
  componentDidMount(){
    this.ws.onopen=()=>{
      console.log('on open.....');
    }
    this.ws.onmessage=evt=>{
      console.log(JSON.parse(evt.data));
    }
    this.ws.onclose=()=>{
      console.log('Closing connection ....');
    }
    try{
      this.ws.send('this is data');
      console.log('sent.....');
    }catch(error){
      console.log('Connecting.....');
    }
    
  }
  
  render(){
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
