import { Link } from 'react-router-dom';

import { useLoginContext } from '../../store/auth/providers/loginProvider.js';
import { authTypes as types } from '../../store/auth/types.js';


const Logout = () => {

    const [ _, dispatch ] = useLoginContext();

    const handleLogout = () => {
		console.log( 'Logout!' );
		dispatch({
            type: types.LOGOUT
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