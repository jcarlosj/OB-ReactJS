import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const RestrictedRouter = ({ isLogged }) => {

	console.log( 'PublicRoutes', isLogged );

	return ! isLogged
		?	<Outlet />
		:	<Navigate to="/dashboard" />
	;
};


RestrictedRouter.propTypes = {
	isLogged: PropTypes.bool.isRequired
};


export { RestrictedRouter };
