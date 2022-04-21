import './App.css';
import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import Chats from "./screens/Chats/Chats";
import { BrowserRouter, Route, Routes, NavLink, Navigate} from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
import { Articles } from './screens/Articles/Articles';
//import { PrivateRoute } from './components/PrivateRoute/ProvateRoute';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

function isActiveColor(targetColor) {
  return ({ isActive }) => ({ color: isActive ? targetColor : ''});
}

// начальное состояние чатов - в src/store/chats/reducer.js
// начальное состояние сообщений - в src/store/messages/reducer.js
// начальное состояние профиля - в src/store/profile/reducer.js

function App() {
  const [authed, setAuthed] = useState(false);
  const [emailOfUserSignedIn, setEmailOfUserSignedIn] = useState('');

  const handleLogin = (userEmail) => {
    //console.log('set authed to true');
    setAuthed(true);
    setEmailOfUserSignedIn(userEmail);
  }
  
  const handleLogout = () => {
    //console.log('set authed to false');
    setAuthed(false);
    setEmailOfUserSignedIn('');
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        //console.log('login ok');
        handleLogin(user.email);

      } else {
        //console.log('login nok');
        handleLogout();
      }
    });

    return unsubscribe;
  }, []);



  
  return (
      <BrowserRouter>
        <div className='appHeader'>
          <div className='appHeaderLeft'>
            <ul>
              <li><NavLink to='/' style={isActiveColor('crimson')}>Home</NavLink></li>
              <li><NavLink to='/chats' style={isActiveColor('crimson')}>Chats</NavLink></li>
              <li><NavLink to='/profile' style={isActiveColor('crimson')}>Profile</NavLink></li>
              <li><NavLink to='/articles' style={isActiveColor('crimson')}>Articles</NavLink></li>
            </ul>
          </div>
          <div className='appHeaderRight'>
              <div className='appHeaderRightHeader'>Chat App</div>
              <div className='appHeaderRightUser'>{emailOfUserSignedIn}</div>
          </div>
        </div>
        <hr></hr>

        <Routes>
          <Route path='/' element={<Home onAuth={handleLogin} isSignUp={false}/>} />
          <Route path="/signup" element={<Home onAuth={handleLogin} isSignUp={true}/>} />
          <Route path="/profile" element={<Profile authed={authed} onLogout={handleLogout} />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/chats/:id' element={<Chats />} />
          <Route path='/articles' element={<Articles />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>

      </BrowserRouter>
  );
}


export default App;
