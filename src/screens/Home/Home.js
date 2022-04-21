import './Home.css';
import { NavLink } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { signUp, logIn } from '../../services/firebase'; 
import { useState } from 'react';

function Home({ onAuth, isSignUp }) {

    //console.log(isSignUp);
    const [error, setError] = useState(null);

    const handleSubmit = async ({ login,pass }) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
                setError(null);
            } else {
                await logIn(login, pass);
                setError(null);
            }
        } catch(e) {
            setError(e.message);
        }
    }


    return (
        <>
            <div className='interimHeader'>Home page</div>
            <div className='homeNav'>
                <NavLink to='/' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Home</NavLink>
                <NavLink to='/chats' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Chats</NavLink>
                <NavLink to='/profile' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Profile</NavLink>
                <NavLink to='/articles' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Articles</NavLink>
            </div>
           <LoginForm onSubmit={handleSubmit} isSignUp={isSignUp}/>
           {error && (<div className='errorMsg'>{error}</div>)}
           <div className='signUpLink'>
                <NavLink to={isSignUp ? '/' : '/signUp'}>
                    {isSignUp ? 'Go to login' : 'Go to sign up'}
                </NavLink>
           </div>
        </>
    );
}

export default Home;