import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

const AppRoutes = ({ data }) => {
	return (
		<Routes>		{/** Define conjunto de rutas */}
			<Route path="login" element={ <LoginPage /> } />
			<Route path="register" element={ <RegisterPage /> } />
		</Routes>
	);
};


AppRoutes.propTypes = {

};


export { AppRoutes };
