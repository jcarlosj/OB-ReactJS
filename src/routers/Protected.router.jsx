import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRouter = ({ isLogged }) => {

	console.log( 'PrivateRoutes', isLogged );

	return isLogged
			?	<Outlet />
			:	<Navigate to="/" />
	;
};


ProtectedRouter.propTypes = {
	isLogged: PropTypes.bool.isRequired
};


export { ProtectedRouter };
