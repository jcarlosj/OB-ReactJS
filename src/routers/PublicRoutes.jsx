import { Navigate } from 'react-router-dom';


const PublicRoutes = ({ children, user }) => {

	return user.logged
			?	<Navigate to="/dashboard" />
			:	children
	;
};


PublicRoutes.propTypes = {

};


export { PublicRoutes };
