import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const RestrictedRoutes = ({ isLogged }) => {

	console.log( 'PublicRoutes', isLogged );

	return ! isLogged
		?	<Outlet />
		:	<Navigate to="/dashboard" />
	;
};


RestrictedRoutes.propTypes = {
	isLogged: PropTypes.bool.isRequired
};


export { RestrictedRoutes };
