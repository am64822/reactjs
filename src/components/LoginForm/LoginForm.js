import './LoginForm.css';
import { useState } from 'react';

export const LoginForm = ({ onSubmit, isSignUp }) => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({login,pass});
        setLogin('');
        setPass('');
    }

    return (
        <>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input type='email' value={login} onChange={handleChangeLogin}/>
                <div className='label'>E-mail</div>
                    <div className='brakeRow'></div>
                <input type='password' value={pass} onChange={handleChangePass}/>
                <div  className='label'>Password</div>
                    <div className='brakeRow'></div>
                <input type='submit' className='submitButton' value={isSignUp ? 'Signup' : 'Login'} />
            </form>

        </>
    );
};