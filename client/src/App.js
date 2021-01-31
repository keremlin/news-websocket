import './App.css';
import React from 'react';
import { Client } from '@stomp/stompjs';
import ReactDom from 'react-dom';


class App extends React.Component {

  state = {
    serverTime: null,
    message:'no Messages'
    ,news:['ِYou join the News at :'+(new Date()).getHours()+':'+(new Date()).getMinutes()]
    ,newsMessage:''
  }
 
  componentDidMount(){

    console.log('component did mount-------');
    this.client=new Client();

   this.client.configure({
      brokerURL: 'ws://localhost:8080/stomp',
      onConnect: () => {
        console.log('onConnect');

        this.client.subscribe('/queue/now', message => {
          this.setState({serverTime: /\d{2}:\d{2}:\d{2}/.exec(message.body)[0]});
        });

        this.client.subscribe('/topic/greetings', message => {
          this.setState({messages:message.body});
        });
        this.client.subscribe('/topic/news',message=>{
          let arrayTemp=this.state.news;
          arrayTemp.push(message.body);
          this.setState({news:arrayTemp});
        });
      },
      // Helps during debugging, remove in production
      debug: (str) => {
        console.log(new Date(), str);
      }
    });
    this.client.activate();
    
  }
  clickHandler = () => {
    this.client.publish({destination: '/app/greetings', body: 'Hello world'});
  }
  clickHandlerNews=()=>{
    this.client.publish({destination:'/app/news',body:this.state.newsMessage});
  }
  handleInput=(event)=>{
    this.setState({newsMessage: event.target.value});
  }
  
  render(){
    
  return (
    <div className="App">
      <header className="App-header">
        <h3>Realtime News Pannel</h3>
        <p>
            Server time: {this.state.serverTime ? this.state.serverTime : 'no data'}
        </p>
        
        <div className="newsBoard">
         {this.state.news.map((value)=>
         <p>{value}</p>
         )}
        </div>
        <p>
          <input type="text" id="newsMessage" onChange={this.handleInput}></input>
          <button onClick={this.clickHandlerNews}>news</button>
        </p>
        <p>
            <button onClick={this.clickHandler}>greeting</button>
        </p>
        <p>{this.state.messages}</p>
        
      </header>
    </div>
  );
  }
}

export default App;
