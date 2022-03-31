import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import './MessageForm.css';
import { useRef, useState } from 'react';

const MessageForm = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const textFieldRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
        textFieldRef.current?.focus();
    }

    const handleChange = (e) => {
        setValue(e.target.value);
        //console.log('change');
    }

    return (
        <form className='formContainer' onSubmit={handleSubmit}>
            <TextField autoFocus inputRef={textFieldRef} value={value} onChange={handleChange} className='inputText'></TextField>
            <Button type='submit' className='inputButton'>Submit</Button>
        </form>
    );
    
  }

export default MessageForm; 