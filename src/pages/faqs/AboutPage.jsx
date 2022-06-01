import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

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
			<Button variant="contained" onClick={ () => goPage( '/' ) } >Go to home</Button>
			<Button variant="contained" onClick={ goBack }>Go back</Button>
			<Button variant="contained" onClick={ goForward }>Go forward</Button>
		</div>
	);
};


export default AboutPage;
