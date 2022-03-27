import './MessageForm.css';
import { useState } from 'react';

const MessageForm = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue(''); 
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form className='formContainer' onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} className='inputText' />
            <input type='submit' className='inputButton'/>
        </form>
    );
    
  }

export default MessageForm; 