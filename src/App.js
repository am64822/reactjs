//import Message from "./components/Message/Message";
import MessageList from "./components/MessageList/MessageList";
import MessageForm from "./components/MessageForm/MessageForm";
import './App.css';
import { useEffect, useState } from "react";

let msgs = [];
/*let msgs = [{text: 'bla-bla-bla', author: 'me'}, 
{text: 'bla-bla-bla', author: 'me'}, 
{text: 'bla-bla-bla', author: 'me'}];*/ 

function App() {
  const [messageList, setMessageList] = useState(msgs);

  const addMessage = (newText) => {
    setMessageList([{text: newText, author: "me"}, ...messageList]);
  }; 


  useEffect(() => {
    if (messageList.length == 0) { return; }
    if (messageList[0].author == 'robot') { return; }
    setMessageList([{text: 'reply from robot', author: "robot"}, ...messageList]);
  }, [messageList]);



  return (
    <div className="App">
        <MessageForm onSubmit={addMessage}/>
        <div className='messageListContainer'>
          <hr></hr>
          <div className='messagesHeader'>Messages</div>
          <MessageList messages={messageList}/>
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
