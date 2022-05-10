import { useState } from 'react';

/** Hojas de estilo en constantes */
const loggedStyle = {
	color: '#61DBFB'
}

const unloggedStyle = {
	color: 'tomato',
	fontWeight: 'bold'
}

const LoginComponent = ( props ) => {

	const [ logged, setLogged ] = useState( false );

    /** Funciones que retornan elementos JSX */
	const greeting = () => <p>Hola, { props.name }!!!</p>;
	const pleaseLogin = () => <p>Please logged.</p>;

	return (
		<div style={ logged ? loggedStyle : unloggedStyle }>
			{	logged 
					?	greeting()
					:	pleaseLogin()
			}
			<button onClick={ () => {
				setLogged( ! logged );
			} }>
				{ logged ? 'Logout' : 'Login' }
			</button>
		</div>
	);
};

export default LoginComponent;