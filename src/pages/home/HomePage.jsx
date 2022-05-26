import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const HomePage = ({ data }) => {

	const
		location = useLocation(),		/** Obtiene la ruta en un momento concreto */
		navigate = useNavigate(),		/** Permite navegar a traves de la pila de navegacion */
		[ state, setState ] = useState({
			logged: false
		});

	useEffect( () => {
		if( data.logged ) {
			setState({
				...data
			});
		}
	}, [ state ] );

	console.log( 'We are in Route:', location.pathname );


    return (
		<>
			<div className="container mt-5">
				<h1>Home Page</h1>
				<p>{ state.logged ? 'logueado' : 'no logueado' }</p>
				<button onClick={ () => navigate( '/profile' ) } >Go to profile</button>
			</div>
		</>

    );
}

export default HomePage;
