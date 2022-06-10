import { useState, useEffect } from 'react';

import MainRoute from './routes/Main.route';

import { getAuthenticatedUser } from './helpers/localStorage';

import './App.css';

function App() {

	const
		[ userLogged, setUserLogged ] = useState(),
		[ loading, setLoading ] = useState( true );

	useEffect( () => {
		console.log( 'App' );
		async function fetchData() {
			const user = await getAuthenticatedUser();

			console.group( 'state component' );
			console.log( user );
			console.log( loading );
			console.groupEnd();

			if( user ) {
				setUserLogged( user );
				setLoading( true );
			}
		}
		fetchData();

		setLoading( false );

	}, []);

	return (
		<div className="App">
			<MainRoute userLogged={ userLogged } setUserLogged={ setUserLogged } />
		</div>
	);
}

export default App;
