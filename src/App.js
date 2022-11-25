import { useState, useEffect } from 'react';

import MainRoute from './routes/Main.route';
import { useAuthContext } from './store/auth/authProvider';
import { authTypes } from './store/auth/authTypes.js';

import { getAuthenticatedUser, registerUsersByDefault } from './helpers/localStorage';

import './App.css';

function App() {

	const
		[ state, dispatch ] = useAuthContext(),
		{ data } = state;

	const
		[ defaultLogs, setDefaultLogs ] = useState( false ),
		[ userLogged, setUserLogged ] = useState({
			isLoggedIn: false,
			user: {}
		}),
		[ loading, setLoading ] = useState( true );

	useEffect( () => {
		console.log( 'App', data );
		
		// Verifica registro de autenticacion en el Store
		if( data?.token === null || ! data?.user )
			dispatch({
				type: authTypes.GET_AUTH_USER
			});		//  Action: Solicita usuario autenticado

		// Verifica que exista un usuario autenticado en el Store
		if( 'email' in data.user )
			setUserLogged({
				isLoggedIn: true,
				user: data?.user
			});
		else
			setUserLogged({
				isLoggedIn: false,
				user: {}
			});
		
		// console.log( { ...userLogged } );



		// async function fetchData() {
		// 	const user = await getAuthenticatedUser();

		// 	if( ! defaultLogs ) {
		// 		registerUsersByDefault();
		// 		setDefaultLogs( true );
		// 	}
			

		// 	console.group( 'state component' );
		// 	console.log( user );
		// 	console.log( loading );
		// 	console.groupEnd();

		// 	if( user ) {
		// 		setUserLogged( user );
		// 		setLoading( true );
		// 	}
		// }
		// fetchData();

		// setLoading( false );

	}, [ data ]);

	return (
		<div className="App">
			<MainRoute { ...userLogged } setUserLogged={ setUserLogged } />
		</div>
	);
}

export default App;
