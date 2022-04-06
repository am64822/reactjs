import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox } from '../../store/profile/actions';

/* toggleCheckbox ->

export const TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX';
export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
}
*/

/* все компоненты App оборачиваем в Provider c указанием store. store создаем через create Store с указанием Reducer. */


import './Profile.css';

function Profile() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    }
    return (
        <>
            <div className='interimHeader'>Profile page</div>
            <label className='checkBox'>Toggle show name<input type="checkbox" onChange={handleClick} checked={state.showName}></input></label>
            {state.showName && <span>{state.name}</span>}
        </>
    );
}

export default Profile;