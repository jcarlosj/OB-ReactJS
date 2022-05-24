import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/faqs/AboutPage';
import NotFoundPage from '../pages/404/NotFoundPage';

const AppRoutes = () => {
	return (
		<Routes>		{/** Define conjunto de rutas */}
			<Route path="/" element={ <HomePage /> } />
			<Route path="about" element={ <AboutPage /> } />
			<Route path="faqs" element={ <AboutPage /> } />

			<Route path="*" element={ <NotFoundPage /> } />
		</Routes>
	);
};


AppRoutes.propTypes = {

};


export { AppRoutes };
