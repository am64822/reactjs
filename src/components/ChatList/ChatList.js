import { List } from '@material-ui/core';
import { ListSubheader } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemButton } from '@material-ui/core';

import './ChatList.css';

const ChatList = ({ chats }) => {
    let chatList = chats.map((chat) => 
        <ListItem component="a" href="#" key={chat.id} className='listItem'>&#9830;&nbsp; {chat.name}</ListItem>
    );

    return (
        <List subheader={<ListSubheader className='listSubheader'>List of chats</ListSubheader>}>
            {chatList}
        </List>
    );
  }

export default ChatList;