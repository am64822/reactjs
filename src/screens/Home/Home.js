import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='interimHeader'>Home page</div>
            <div className='homeNav'>
                <NavLink to='/' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Home</NavLink>
                <NavLink to='/chats' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Chats</NavLink>
                <NavLink to='/profile' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Profile</NavLink>
                <NavLink to='/articles' className='homeNavLink' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Articles</NavLink>
            </div>
        </>
    );
}

export default Home;