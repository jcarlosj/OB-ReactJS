import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = ({ data }) => {

	const
		location = useLocation(),		/** Obtiene la ruta en un momento concreto */
		navigate = useNavigate();		/** Permite navegar a traves de la pila de navegacion */

	console.log( 'We are in Route:', location.pathname );

    return (
		<>
			<div className="container mt-5">
				<h1>Home Page</h1>
				<button onClick={ () => navigate( '/profile' ) } >Go to profile</button>
			</div>
		</>

    );
}

export default HomePage;
