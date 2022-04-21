//import { onValue } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router";
import { logOut, userRef } from '../../services/firebase';
import { toggleCheckbox } from '../../store/profile/actions';
import { selectShowName, selectName } from '../../store/profile/selectors'


import './Profile.css';

function Profile({ authed, onLogout }) {
    const dispatch = useDispatch();
    const showName = useSelector(selectShowName);
    const name = useSelector(selectName);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    }

    if (authed == false) {
        return (<Navigate to='/' replace/>);
    }

    return (
        <>
            <div className='interimHeader'>Profile page</div>
            <label className='checkBox'>Toggle show name
                <input type="checkbox" onChange={handleClick} checked={showName}></input>
            </label>
            {showName && <span>{name}</span>}
            <br></br><br></br>
            <button onClick={ logOut }>Logout</button>
        </>
    );
}

export default Profile;