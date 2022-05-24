import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

	const
		location = useLocation(),		/** Obtiene la ruta en un momento concreto */
		navigate = useNavigate();		/** Permite navegar a traves de la pila de navegacion */

	console.log( 'We are in Route:', location.pathname );

    return (
        <>
            <h1>Home Page</h1>
			<button onClick={ () => navigate( '/profile' ) } >Go to profile</button>
        </>
    );
}

export default HomePage;
