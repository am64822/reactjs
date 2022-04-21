//relative path to scr: "../.."
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import MessageList from "../../components/MessageList/MessageList";
//import MessageForm from "../../components/MessageForm/MessageForm";
import ChatList from "../../components/ChatList/ChatList";
import './Chats.css';
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
//import { addMessage, addMessageWithReply, initMessagesOfChat } from '../../store/messages/actions';
//import { addChat } from '../../store/chats/actions';
//import { selectChats } from '../../store/chats/selectors';
//import { selectMessages } from '../../store/messages/selectors';
import { MessageFormContainer } from '../../components/MessageForm/MessageFormContainer';
import { onValue, push, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsListRefById, getMsgsRefById } from '../../services/firebase';


function Chats() {
  const { id } = useParams();
  //const dispatch = useDispatch();
  
  const [chats, setChats] = useState([]);
  //const chats = useSelector(selectChats, shallowEqual); // нужно для проверки на предмет задвоения имени (для нового чата)
  //const messagesOfChat = useSelector(selectMessages, shallowEqual)[id]; // сообщения чата с указанным id
  
  const [messagesOfChat, setMessagesOfChat] = useState([]);
  
  let chatSelected; // 1 - selected and exists, 2 - selected and does not exist, 3 - not selected
  if (!id) {
    chatSelected = 3;
  } else if (!messagesOfChat) {
    chatSelected = 2;
  } else {
    chatSelected = 1;
  }


  const addMessageOnSubmit = (newText) => {
    const newMsg = {id: new Date().valueOf(), text: newText, author: "me"};
    push(getMsgsListRefById(id), newMsg);
    //dispatch(addMessageWithReply(newMsg, id));
  }; 

  const formOnSubmit = (e) => { // добавление чата. Удаление - см. ChatList
    e.preventDefault();
    const chatName = e.target.newChatName;
    let nameExistsFlag = false;

    if (chatName.value === '') {return;} // имя не задано - выход
    chats.forEach((item, index, array) => { // проверка на зодвоение имени
      if (item.name === chatName.value) {
        nameExistsFlag = true;
      }
    });

    if (nameExistsFlag) { // задвоение имени - выход
      chatName.value = '';
      return;
    }

    const chatID = Date.now();
    set(getChatRefById(chatID), {id: chatID, name: chatName.value});
    //dispatch(addChat(chatID, chatName.value));

    //dispatch(initMessagesOfChat(chatID)); // пустой набор сообщений для новго чата
    set(getMsgsListRefById(chatID), {exists: true});

    chatName.value = '';
  }
  
  // формирование ответа от робота по событию обновления списка сообщений (Firebase ->  messagesOfChat)
  useEffect(() => {
    if (chatSelected !== 1) { return; }
    if (messagesOfChat.length === 0) { return; }
    if (messagesOfChat[messagesOfChat.length-1].author === 'robot') { return; }
    const newMsg = {id: new Date().valueOf(), text: 'reply from robot', author: "robot"};
    //dispatch(addMessage(newMsg, id));
    push(getMsgsListRefById(id), newMsg);
  }, [messagesOfChat]);

  // подписка на обновления списка сообщений в Firebase
  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      let msgList = (Object.values(snapshot.val() || {}))[0];
      let msgsArray = [];
      
      for (let prop in msgList) {
        if (msgList[prop] !== true) {
          msgsArray.push(msgList[prop]);
        }
      }
      //console.log(msgsArray);
      setMessagesOfChat(msgsArray);
    });

    return unsubscribe;
  }, [id]);


  // список чатов здесь нужен для проверки на задвоение имен чатов (см.выше)
  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
        setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);


  if (chatSelected === 2) {
    return (<Navigate to='/chats' replace/>);
  }
  
  return (
    <>
      <div className="chatsHeader">Chats</div>
      <div className="chat">
          <div className='chatList'>
            <div>New chat<br></br>(enter the name into filed below<br></br>and press "Create new chat")</div> 
            <form onSubmit={formOnSubmit}>
              <input type='text' name='newChatName'></input>
              <button type='submit' className='buttonNewChat'>Ctreate new chat</button>
            </form>
            <ChatList></ChatList>
          </div>
          {(chatSelected === 1) && (<div className='others'>
            <MessageFormContainer onSubmit={addMessageOnSubmit}/>
            <div className='messageListContainer'>
              <hr></hr>
              <div className='messagesHeader'>Messages</div>
              <MessageList messages={messagesOfChat}/>
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