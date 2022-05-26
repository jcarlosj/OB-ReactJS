import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROLES } from '../models/roles.enum';

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

import { getRegisteredUserData, getUserCredentialData, getAuthenticatedUser } from '../helpers/localStorage';

import Navbar from '../components/ui/Navbar';

const MainRoutes = () => {

	const [ data, setData ] = useState({
		logged_user: {
			username: '',
			email: '',
			passwd: '',
			role: ROLES.USER
		},
		users: [],
		total_records: 0,
		logged: false
	});

	const { logged_user: { username, email, passwd, role }, total_records, logged } = data;

	/** Seguimiento a cambios en el estado para obtener usuarios registrados */
	useEffect( () => {

		( async() => {

			const registered_users = await getRegisteredUserData();
			// console.log( registered_users );

			if( registered_users?.length > 0 ) {
				setData({
					...data,
					users: registered_users,
					total_records: registered_users.length
				});
			}

		})();

		( async() => {

			const auth_user = await getUserCredentialData();

			// console.log( auth_user );
			// console.log( data.users );
			// console.log( 'authenticate user: ', getAuthenticatedUser( users, auth_user ) );

			const user_credentials = getAuthenticatedUser( data.users, auth_user );

			if( user_credentials ) {
				setData({
					...data,
					logged_user: user_credentials,
					logged: true
				});
			}

		})();

	}, [ username, email, passwd, role, logged, total_records ] );

	console.log( 'data', data );

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
					<Route element={ <RestrictedRouter isLogged={ data?.logged } /> } >
						<Route path="login" element={ <LoginPage data={ data } setData={ setData } /> } />
						<Route path="register" element={ <RegisterPage data={ data } setData={ setData } /> } />
					</Route>

					{/** Rutas Protegidas: Exclusivamente se accede con login */}
					<Route element={ <ProtectedRouter isLogged={ data?.logged } /> } >
						<Route path="dashboard" element={ <DashboardPage /> } />
						<Route path="profile" element={ <ProfilePage /> } />
						<Route path="tasks">
							<Route index element={ <TaskPage /> } />
							<Route path=":id" element={ <TaskDetailPage />} />
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
