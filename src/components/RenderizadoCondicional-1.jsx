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

	return (
		<div style={ logged ? loggedStyle : unloggedStyle }>
			{	logged 
					?	<p>Hola, { props.name }!</p>
					:	<p>Please logged.</p>
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