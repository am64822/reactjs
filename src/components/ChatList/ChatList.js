import { NavLink } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './ChatList.css';
//import { deleteChat } from '../../store/chats/actions';
//import { deleteMessagesOfChat } from '../../store/messages/actions';
//import { selectChats } from '../../store/chats/selectors';
import { useEffect, useState } from 'react';
import { onValue, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsListRefById } from '../../services/firebase';


function isActiveColor(targetColor) {
    return ({ isActive }) => ({ color: isActive ? targetColor : ''});
  }

const ChatList = () => {
    const [chats, setChats] = useState([]);
    
    const dispatch = useDispatch();
    //const chats = useSelector(selectChats, shallowEqual);

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            setChats(Object.values(snapshot.val() || {}));
        });

        return unsubscribe;
    }, []);

    let chatList = chats.map((chat) => 
        <li key={chat.id}>
            <NavLink to={`/chats/${chat.id}`} style={isActiveColor('crimson')} className='navLink'>{chat.name}</NavLink>
            <button className='deleteChat' onClick={() => {
                set(getChatRefById(chat.id), null);
                set(getMsgsListRefById(chat.id), null);
                //dispatch(deleteChat(chat.id));
                //dispatch(deleteMessagesOfChat(chat.id))
            }}>X</button>
        </li>
    );

    return (
        <>
            <div className='listSubheader'>Chat selector</div>
            <ul>
                {chatList}
            </ul>
        </>
    );
  }

export default ChatList;