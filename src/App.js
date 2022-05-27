import { useState, useEffect } from 'react';

import MainRoutes from './routes/Main.routes';

import { ROLES } from '../src/models/roles.enum';
import { getRegisteredUserData, getUserCredentialData, getAuthenticatedUser } from '../src/helpers/localStorage';
import { getTasks } from '../src/helpers/data';

import { Task } from '../src/models/task.class';

import './App.scss';
import './App.css';

function App() {

	const [ data, setData ] = useState({
		logged_user: {
			username: '',
			email: '',
			passwd: '',
			role: ROLES.USER
		},
		users: [],
		total_records: 0,
		logged: false,
		tasks: []
	});

	const { logged_user: { username, email, passwd, role }, total_records, logged, tasks } = data;

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

		( async() => {
			const dataTasks = getTasks();

			if( dataTasks.length > 0 ) {

				setData({
					...data,
					tasks: dataTasks.map( task => {
						return new Task( task.name, task.description, task.complete, task.level );
					})
				});
			}

		})();

	}, [ username, email, passwd, role, logged, total_records, tasks ] );

	console.log( 'data', data );

	return (
		<>
			<MainRoutes data={ data } setData={ setData } />
		</>
	);
}

export default App;
