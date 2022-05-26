import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ROLES } from '../models/roles.enum';

import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AppRoutes } from './AppRoutes';
import { DashboardRoutes } from './DashboardRoutes';

import HomePage from '../pages/home/HomePage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import AboutPage from '../pages/faqs/AboutPage';
import NotFoundPage from '../pages/404/NotFoundPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ProfilePage from '../pages/profile/ProfilePage';
import TaskPage from '../pages/task/TaskPage';
import TaskDetailPage from '../pages/task/TaskDetailPage';

import { getRegistered, getCredentials } from '../helpers/localStorage';
import { isAuthenticated } from '../helpers/validateCredentials';

import Navbar from '../components/ui/Navbar';

const MainRouter = () => {

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

	const { logged_user: { email }, users, total_records, logged } = data;

	/** Seguimiento a cambios en el estado para obtener usuarios registrados */
	useEffect( () => {

		( async() => {

			const registered_users = await getRegistered();
			console.log( registered_users );

			if( registered_users?.length > 0 ) {
				setData({
					...data,
					users: registered_users,
					total_records: registered_users.length
				});
			}

		})();

	}, [ total_records ] );

	/** Seguimiento a cambios en el estado para obtener usuarios registrados y verificar autenticacion de usuario */
	useEffect( () => {

		( async() => {

			const auth_user = await getCredentials();

			console.log( auth_user );
			console.log( isAuthenticated( users, auth_user ) );

			if( isAuthenticated( users, auth_user ) ) {
				setData({
					...data,
					logged_user: auth_user,
					logged: true
				});
			}

		})();
	}, [ email, logged, total_records ] );


	console.log( 'data', data );

	return (
		<>
			<BrowserRouter>
				<Navbar data={ data } setData={ setData }/>
				<Routes>
					{/*
					<Route path="/" element={
						data?.logged
							?	<DashboardPage data={ data } />
							: 	<HomePage data={ data } />
					}/> */}

					<Route path="/" element={ <HomePage data={ data } /> } />
					<Route path="about" element={ <AboutPage /> } />
					<Route path="faqs" element={ <AboutPage /> } />

					<Route element={ <PublicRoutes isLogged={ data?.logged } /> } >
						<Route path="login" element={ <LoginPage data={ data } setData={ setData } /> } />
						<Route path="register" element={ <RegisterPage data={ data } setData={ setData } /> } />
					</Route>

					<Route element={ <PrivateRoutes isLogged={ data?.logged } /> } >
						<Route path="dashboard" element={ <DashboardPage /> } />
						<Route path="profile" element={ <ProfilePage /> } />
						<Route path="tasks">
							<Route index element={ <TaskPage /> } />
							<Route path=":id" element={ <TaskDetailPage />} />
						</Route>
					</Route>
					{/* <Route path="/" element={
						<PublicRoutes data={ data }>
							<AppRoutes data={ data } />
						</PublicRoutes>
					}/> */}
					{/* <Route path="/*" element={
						<PrivateRoutes data={ data }>
							<DashboardRoutes data={ data } />
						</PrivateRoutes>
					}/> */}

					<Route path="*" element={ <NotFoundPage /> } />
				</Routes>
			</BrowserRouter>
		</>
	);
};


MainRouter.propTypes = {

};


export default MainRouter;
