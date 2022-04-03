import { NavLink } from 'react-router-dom';

import './ChatList.css';

const ChatList = ({ chats }) => {
    let chatList = chats.map((chat) => 
        <li key={chat.id}>
            <NavLink to={'/chats/'+chat.id} style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>{chat.name}</NavLink>
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