import { Navigate, Outlet } from 'react-router-dom';


const PublicRoutes = ({ isLogged }) => {

	console.log( 'PublicRoutes', isLogged );

	return ! isLogged
		?	<Outlet />
		:	<Navigate to="/dashboard" />
	;
};


PublicRoutes.propTypes = {

};


export { PublicRoutes };
