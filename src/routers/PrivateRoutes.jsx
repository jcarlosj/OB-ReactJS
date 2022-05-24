import { Navigate } from 'react-router-dom';


const PrivateRoutes = ({ children, user }) => {

	return user.logged
			?	children
			:	<Navigate to="/" />
	;
};


PrivateRoutes.propTypes = {

};


export { PrivateRoutes };
