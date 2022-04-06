import './App.css';
import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import Chats from "./screens/Chats/Chats";
import { BrowserRouter, Route, Routes, NavLink, Navigate} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='appHeader'>
          <div className='appHeaderLeft'>
            <ul>
              <li><NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Home</NavLink></li>
              <li><NavLink to='/chats' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Chats</NavLink></li>
              <li><NavLink to='/profile' style={({ isActive }) => ({ color: isActive ? 'crimson' : ''})}>Profile</NavLink></li>
            </ul>
          </div>
          <div className='appHeaderRight'>Chat App</div>
        </div>
        <hr></hr>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/chats/:id' element={<Chats />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}


export default App;
