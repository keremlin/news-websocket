import './App.css';
import React from 'react';
import { Client } from '@stomp/stompjs';
import NewsBoard from './newsBoard/newsBoard'
import Header from './header/header'


class App extends React.Component {

  state = {
    serverTime: null,
    message:'no Messages'
    , news: [
      { message: 'You join the News at :' + (new Date()).getHours() + ':' + (new Date()).getMinutes(), user: 'System', date: '1400/01/21' }
    ]
    ,newsMessage:''
  }
 
  componentDidMount(){

    //console.log('component did mount-------');
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
        this.client.subscribe('/topic/news',messages=>{
          let item={message:messages.body,user:'admin',date:'14001/02/02'};
          let arrayTemp=this.state.news;
          arrayTemp.push(item);
          this.setState({news:arrayTemp});
        });
      },
      /*Helps during debugging, remove in production
      debug: (str) => {
        console.log(new Date(), str);
      }*/ 
    });
    this.client.activate();
    
  }
  clickHandler = () => {
    this.client.publish({destination: '/app/greetings', body: 'Hello world'});
  }
  sendNews=(value)=>{
    console.log('send data is fired : '+value);
    this.client.publish({destination:'/app/news',body:value});
  }
  
  render(){
    
  return (
    <>
      <Header></Header>
      <div className="row no-gutters appjs">
        <div className="col-md-12">
          <h3>Realtime Events Pannel</h3>
          <NewsBoard
            news={this.state.news}
            sendNews={this.sendNews}
            serverTime={this.state.serverTime ? this.state.serverTime : 'no data'}
          >
          </NewsBoard>


          <p>
            <button onClick={this.clickHandler}>greeting</button>
          </p>
          <p>{this.state.messages}</p>
        </div>



      </div>
    </>
  );
  }
}

export default App;
