//relative path to scr: "../.."
import MessageList from "../../components/MessageList/MessageList";
import MessageForm from "../../components/MessageForm/MessageForm";
import ChatList from "../../components/ChatList/ChatList";
import './Chats.css';
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const chats = [{id: '0', name: 'chat 0'}, {id: '1', name: 'chat 1'}, 
{id: '2', name: 'chat 2'}, {id: '3', name: 'chat 3'}];

let initMessages = {};
chats.forEach((item, index, array) => {
  initMessages[index] = []; 
});

function Chats() {
  const { id } = useParams();
  
  let chatSelected; // 1 - selected and exists, 2 - selected and does not exist, 3 - not selected
  if (typeof(id) == 'undefined') {
    chatSelected = 3;
  } else if (typeof(initMessages[id]) == 'undefined') {
    chatSelected = 2;
  } else {
    chatSelected = 1;
  }

  const [messageList, setMessageList] = useState(initMessages);

  const addMessage = (newText) => {
    const newMsg = {id: new Date().valueOf(), text: newText, author: "me"};
    setMessageList({ ...messageList, [id]: [newMsg, ...messageList[id]]});
  }; 

  useEffect(() => {
    if (chatSelected !== 1) { return; }
    if (messageList[id].length === 0) { return; }
    if (messageList[id][0].author === 'robot') { return; }
    const newMsg = {id: new Date().valueOf(), text: 'reply from robot', author: "robot"};
    setMessageList({ ...messageList, [id]: [newMsg, ...messageList[id]]});
  }, [messageList]);

  if (chatSelected === 2) {
    return (<Navigate to='/chats' replace/>);
  }

  return (
    <>
      <div className="chatsHeader">Chats</div>
      <div className="chat">
          <div className='chatList'>
            <ChatList chats={chats}></ChatList>
          </div>
          {(chatSelected === 1) && (<div className='others'>
            <MessageForm onSubmit={addMessage}/>
            <div className='messageListContainer'>
              <hr></hr>
              <div className='messagesHeader'>Messages</div>
              <MessageList messages={messageList[id]}/>
            </div>
          </div>)}
          {(chatSelected === 3) && (<div className='others'>
            <div className='noChatSelected'>No chat selected</div>
          </div>)}
          {(chatSelected === 2) && (<div className='others'>
            <div className='noChatSelected'>Selected chat does not exist</div>
          </div>)}          
      </div>
    </>
  );
}

export default Chats;