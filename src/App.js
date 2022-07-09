import { useState, useEffect, useRef } from 'react';

import MainRoutes from './routes/Main.routes';
import useAuth from './hooks/useAuth';
import useUsers from './hooks/useUsers';

import { getStaticTaskRecords } from '../src/helpers/staticRecords';

import './App.scss';
import './App.css';

function App() {
	const isEffectRun = useRef( false );

	const
		logged_user = useAuth(),
		users = useUsers();

	const [ data, setData ] = useState({
		logged_user: null,
		users: [],
		tasks: []
	});

	useEffect( () => {

		// ! Si el efecto NO se ha lanzado obtiene datos estaticos
		if( ! isEffectRun.current ) {
			setData( prevState => ({
				...prevState,
				tasks: getStaticTaskRecords()
			}));

		} // ! Si el efecto se ha lanzado obtiene datos del localStorage
		else {
			setData( prevState => ({
				...prevState,
				logged_user,
				users
			}));

		}

		console.log( 'isEffectRun', isEffectRun.current );
		console.log( data );

		return () => {
			 // ! Verifica que el efecto no se ha lanzado
			if( ! isEffectRun ) {
                console.log( 'Simulate unmount hook useFetch !' );    // ! Nunca se ejecuta por que isEffect para este momento siempre sera 'true'
            }
            else {
                console.log( 'Unmount hook useFetch!' );
                isEffectRun.current = true;                           // ! Cambia el estado del inmutable que controla consulta del API una sola ves ante la duplicidad de la ejecucion del hoook useEffect sobre el Hook u Componente
            }
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ data.users ] );

	return (
		<>
			<MainRoutes data={ data } setData={ setData } />
		</>
	);
}

export default App;
