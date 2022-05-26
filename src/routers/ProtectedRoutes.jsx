import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ isLogged }) => {

	console.log( 'PrivateRoutes', isLogged );

	return isLogged
			?	<Outlet />
			:	<Navigate to="/" />
	;
};


ProtectedRoutes.propTypes = {
	isLogged: PropTypes.bool.isRequired
};


export { ProtectedRoutes };
