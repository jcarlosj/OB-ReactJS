import { useState, useEffect } from 'react';

import MainRoute from './routes/Main.route';

import './App.css';

function App() {

	const
		[ userLogged, setUserLogged ] = useState(),
		[ loading, setLoading ] = useState( true );

	useEffect( () => {
		console.log( 'App' );
		async function fetchData() {
			const user = await localStorage.getItem( 'authenticated_user' );

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

	}, [ loading, userLogged ]);

	return (
		<div className="App">
			<MainRoute />
		</div>
	);
}

export default App;
