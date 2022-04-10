import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox } from '../../store/profile/actions';
import { selectShowName, selectName } from '../../store/profile/selectors'


import './Profile.css';

function Profile() {
    const dispatch = useDispatch();
    const showName = useSelector(selectShowName);
    const name = useSelector(selectName);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    }
    return (
        <>
            <div className='interimHeader'>Profile page</div>
            <label className='checkBox'>Toggle show name
                <input type="checkbox" onChange={handleClick} checked={showName}></input>
            </label>
            {showName && <span>{name}</span>}
        </>
    );
}

export default Profile;