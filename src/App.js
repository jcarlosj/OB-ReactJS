import { useState, useEffect } from 'react';

import MainRoutes from './routes/Main.routes';

import { ROLES } from '../src/models/roles.enum';

import { getRegisteredUserData, getUserCredentialData, getAuthenticatedUser } from '../src/helpers/localStorage';
import { getStaticTaskRecords } from '../src/helpers/staticRecords';

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
	const [ loading, setLoading ] = useState( true );

	/** Seguimiento a cambios en el estado para obtener usuarios registrados */
	useEffect( () => {

		setLoading( false );

		( async() => {

			const registered_users = await getRegisteredUserData();
			// console.log( registered_users );

			if( registered_users?.length > 0 ) {
				setData( ( prevData ) => ({
					...prevData,
					users: registered_users,
					total_records: registered_users.length
				}));
				setLoading( true );
			}

			setLoading( false );
		})();

		( async() => {

			const dataTasks = getStaticTaskRecords();

			if( dataTasks.length > 0 ) {
				// console.log( dataTasks );
				setData( ( prevData ) => ( {
					...prevData,
					tasks: dataTasks
				}));
				setLoading( true );
			}

			setLoading( false );
		})();

	}, [ setLoading ] );

	useEffect(() => {

		setLoading( false );

		( async() => {
			const auth_user = await getUserCredentialData();

			// console.log( auth_user );
			// console.log( data.users );

			const user_credentials = getAuthenticatedUser( data.users, auth_user );

			// console.log( user_credentials );
			if( user_credentials ) {
				setData( ( prevData ) => ({
					...prevData,
					logged_user: user_credentials,
					logged: true
				}));
				setLoading( true );
			}


		})();

	}, [ data.users, setLoading ]);

	console.log( 'App', data );

	return (
		<>
			<MainRoutes data={ data } setData={ setData } />
		</>
	);
}

export default App;
