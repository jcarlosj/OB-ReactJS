import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../helpers/localStorage';
import { logout } from '../../features/auth/authSlice.js';


const Logout = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
		logoutUser();
		console.log( 'Logout!' );
		dispatch( logout() );
	}

    return (
        <>
            <Link to='/'
                onClick={ handleLogout }
            >Logout</Link>
        </>
    );
}

export default Logout;
