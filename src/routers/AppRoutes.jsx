import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/faqs/AboutPage';
import NotFoundPage from '../pages/404/NotFoundPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

const AppRoutes = () => {
	return (
		<Routes>		{/** Define conjunto de rutas */}
			<Route path="/" element={ <HomePage /> } />
			<Route path="login" element={ <LoginPage /> } />
			<Route path="register" element={ <RegisterPage /> } />
			<Route path="about" element={ <AboutPage /> } />
			<Route path="faqs" element={ <AboutPage /> } />

			<Route path="*" element={ <NotFoundPage /> } />
		</Routes>
	);
};


AppRoutes.propTypes = {

};


export { AppRoutes };
