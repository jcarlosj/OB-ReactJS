import { useNavigate, useLocation } from 'react-router-dom';

const AboutPage = () => {

	const
		location = useLocation(),		/** Obtiene la ruta en un momento concreto */
		navigate = useNavigate();		/** Permite navegar a traves de la pila de navegacion */

	console.log( 'We are in Route:', location.pathname );

	const goPage = ( path ) => {
		navigate( path );
	}

	const goBack = () => {
		navigate( -1 );		// es equivalente a presionar el botón atrás (# paginas atrás en la pila)
	}

	const goForward = () => {
		navigate( 1 );		// es equivalente a presionar el botón adelante (# paginas adelante en la pila)
	}

	return (
		<div className="container mt-5">
			<h1>About page | FAQs</h1>
			<button onClick={ () => goPage( '/' ) } >Go to home</button>
			<button onClick={ goBack }>Go back</button>
			<button onClick={ goForward }>Go forward</button>
		</div>
	);
};


export default AboutPage;
