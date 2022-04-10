import { NavLink } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './ChatList.css';
import { deleteChat } from '../../store/chats/actions';
import { deleteMessagesOfChat } from '../../store/messages/actions';
import { selectChats } from '../../store/chats/selectors';


function isActiveColor(targetColor) {
    return ({ isActive }) => ({ color: isActive ? targetColor : ''});
  }

const ChatList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectChats, shallowEqual);
    
    let chatList = chats.map((chat) => 
        <li key={chat.id}>
            <NavLink to={`/chats/${chat.id}`} style={isActiveColor('crimson')} className='navLink'>{chat.name}</NavLink>
            <button className='deleteChat' onClick={() => {
                dispatch(deleteChat(chat.id));
                dispatch(deleteMessagesOfChat(chat.id))
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