import { Link } from 'react-router-dom';

import { useAuthContext } from '../../store/auth/authProvider.js';
import { authTypes } from '../../store/auth/authTypes.js';


const Logout = () => {

    const [ _, dispatch ] = useAuthContext();

    const handleLogout = () => {
		console.log( 'Logout!' );
		dispatch({
            type: authTypes.LOGOUT
        });
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