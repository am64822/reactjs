import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import './MessageForm.css';

export const MessageFormOutlook = (( { handleSubmit , textFieldRef, value, handleChange } ) => {
    return (
        <form className='formContainer' onSubmit={handleSubmit}>
            <TextField inputRef={textFieldRef} value={value} onChange={handleChange} className='inputText'></TextField>
            <Button type='submit' className='inputButton'>Submit</Button>
        </form>
    );
});