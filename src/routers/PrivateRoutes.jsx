import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoutes = ({ isLogged }) => {

	console.log( 'PrivateRoutes', isLogged );

	return isLogged
			?	<Outlet />
			:	<Navigate to="/" />
	;
};


PrivateRoutes.propTypes = {

};


export { PrivateRoutes };
