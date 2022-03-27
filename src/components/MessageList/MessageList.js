import './MessageList.css';

const MessageList = ({messages}) => {
    //console.log(messages);
    return messages.map((message) => 
    <div className='messageListRow'>
      <div className='messageAuthor'>{message.author}</div>
      <div className='messageText'>{message.text}</div>
    </div>);
};

export default MessageList;