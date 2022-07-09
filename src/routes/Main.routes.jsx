import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RestrictedRouter } from '../routers/Restricted.router';
import { ProtectedRouter } from '../routers/Protected.router';

import HomePage from '../pages/home/HomePage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import AboutPage from '../pages/faqs/AboutPage';
import NotFoundPage from '../pages/404/NotFoundPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ProfilePage from '../pages/profile/ProfilePage';
import TaskPage from '../pages/task/TaskPage';
import TaskDetailPage from '../pages/task/TaskDetailPage';

import Navbar from '../components/ui/Navbar';

const MainRoutes = ({ data, setData }) => {

	// console.log( data );

	return (
		<>
			<BrowserRouter>
				<Navbar data={ data } setData={ setData }/>
				<Routes>

					{/* Rutas publicas: Total acceso */}
					<Route path="/" element={ <HomePage data={ data } /> } />
					<Route path="about" element={ <AboutPage /> } />
					<Route path="faqs" element={ <AboutPage /> } />

					{/** Rutas Restringidas: Exclusivamente se accede sin login */}
					<Route element={ <RestrictedRouter isLogged={ true } /> } >
						<Route path="login" element={ <LoginPage data={ data } setData={ setData } /> } />
						<Route path="register" element={ <RegisterPage data={ data } setData={ setData } /> } />
					</Route>

					{/** Rutas Protegidas: Exclusivamente se accede con login */}
					<Route element={ <ProtectedRouter isLogged={ false } /> } >
						<Route path="dashboard" element={ <DashboardPage /> } />
						<Route path="profile" element={ <ProfilePage /> } />
						<Route path="tasks">
							<Route index element={ <TaskPage data={ data } setData={ setData } /> } />
							<Route path=":id" element={ <TaskDetailPage data={ data } />} />
						</Route>
					</Route>

					{/* Rutas publica: Total acceso (Ruta no existente) */}
					<Route path="*" element={ <NotFoundPage /> } />
				</Routes>
			</BrowserRouter>
		</>
	);
};


MainRoutes.propTypes = {

};


export default MainRoutes;
