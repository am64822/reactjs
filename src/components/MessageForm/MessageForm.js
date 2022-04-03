import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import './MessageForm.css';
import { useRef, useState, useEffect } from 'react';

const MessageForm = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const textFieldRef = useRef();


    useEffect(() => {
            if (document.activeElement !== textFieldRef.current) {
                //console.log('here');
                textFieldRef.current?.focus();
            }
    });    

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
            <TextField inputRef={textFieldRef} value={value} onChange={handleChange} className='inputText'></TextField>
            <Button type='submit' className='inputButton'>Submit</Button>
        </form>
    );
    
  }

export default MessageForm; 