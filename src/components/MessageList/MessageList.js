import './MessageList.css';

const MessageList = ({messages}) => {
    return messages.map((message) => 
    <div className='messageListRow' key={message.id}>
      <div className='messageAuthor'>{message.author}</div>
      <div className='messageText'>{message.text}</div>
    </div>);
};

export default MessageList;