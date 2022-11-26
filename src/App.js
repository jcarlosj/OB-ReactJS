import { useState, useEffect } from 'react';

import MainRoute from './routes/Main.route';
import { useLoginContext } from './store/auth/providers/loginProvider.js';
import { authTypes } from './store/auth/types.js';

import './App.css';

function App() {

	const
		[ state, dispatch ] = useLoginContext(),
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
		if( data.user.hasOwnProperty( 'email' ) )
			setUserLogged({
				isLoggedIn: true,
				user: data?.user
			});
		else
			setUserLogged({
				isLoggedIn: false,
				user: {}
			});

	}, [ data ]);

	return (
		<div className="App">
			<MainRoute { ...userLogged } setUserLogged={ setUserLogged } />
		</div>
	);
}

export default App;
