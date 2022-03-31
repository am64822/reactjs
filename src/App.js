//import Message from "./components/Message/Message";
import MessageList from "./components/MessageList/MessageList";
import MessageForm from "./components/MessageForm/MessageForm";
import ChatList from "./components/ChatList/ChatList";
import './App.css';
import { useEffect, useState } from "react";

let msgs = [];

let chats = [{id: '0', name: 'chat 0'}, {id: '1', name: 'chat 1'}, 
{id: '2', name: 'chat 2'}, {id: '3', name: 'chat 3'}];

function App() {
  const [messageList, setMessageList] = useState(msgs);

  const addMessage = (newText) => {
    setMessageList([{id: new Date().valueOf(), text: newText, author: "me"}, ...messageList]);
  }; 


  useEffect(() => {
    if (messageList.length == 0) { return; }
    if (messageList[0].author == 'robot') { return; }
    setMessageList([{id: new Date().valueOf(), text: 'reply from robot', author: "robot"}, ...messageList]);
  }, [messageList]);



  return (
    <div className="App">
        <div className='chatList'>
          <ChatList chats={chats}></ChatList>
        </div>
        <div className='others'>
          <MessageForm onSubmit={addMessage}/>
          <div className='messageListContainer'>
            <hr></hr>
            <div className='messagesHeader'>Messages</div>
            <MessageList messages={messageList}/>
          </div>
        </div>
    </div>
  );
}


/*import logo from './logo.svg';
import './App.css';

function App() {
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
} */

export default App;
