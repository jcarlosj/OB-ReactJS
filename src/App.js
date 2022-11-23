import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainRoute from './routes/Main.route';

import { getAuthUser } from './features/auth/authSlice.js';

import './App.css';

function App() {
	const
		{ data } = useSelector( state => state.auth ),
		dispatch = useDispatch();


	const
		[ defaultLogs, setDefaultLogs ] = useState( false ),
		[ userLogged, setUserLogged ] = useState({
			isLoggedIn: false,
			user: {}
		}),
		[ loading, setLoading ] = useState( true );


	useEffect( () => {
		console.log( 'App', data );
		
		// Verifica registro de autenticacion en Redux Store
		if( data?.token === null || ! data?.user )
			dispatch( getAuthUser() );		//  Action: Solicita usuario autenticado

		// Verifica que exista un usuario autenticado en Redux Store
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

	}, [ data ] );


	return (
		<div className="App">
			<MainRoute { ...userLogged } setUserLogged={ setUserLogged } />
		</div>
	);
}

export default App;
