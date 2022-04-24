import './Message.css';

const Message = ({ textToDisplay }) => {
  return (
        <span className='messageContainer'>{textToDisplay}</span>
    );
  }

export default Message; 