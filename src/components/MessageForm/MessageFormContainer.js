import './MessageForm.css';
import { useRef, useState, useEffect } from 'react';
import { MessageFormOutlook } from './MessageFormOutlook';

export const MessageFormContainer = ({ onSubmit }) => {
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
        //console.log('here');
        setValue(e.target.value);
    }

    return (
        <MessageFormOutlook 
            handleSubmit={handleSubmit} 
            textFieldRef={textFieldRef} 
            value={value} 
            handleChange={handleChange} >
        </MessageFormOutlook>
    );
    
  }