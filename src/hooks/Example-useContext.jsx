import React, { useState, useContext } from 'react';

/** Ejemplo 3: Implementacion de
 *    1. useContext: Permite usar el contexto para pasarselo a componentes hijos
 * 					 En otras palabras pasa datos de un componente padre a sus componentes hijos a traves del contexto
 * */


const theContext = React.createContext( null );

const Example3 = () => {

	const estadoInicial = {
		token: generateToken(),
		session: 1
	}

	const [ sessionData, setSessionData ] = useState( estadoInicial );

	function generateToken() {
		return Math.floor(
				( 1 + Math.random() ) * 0x10000000000000000
			)
			.toString( 16 )
			.substring( 1 );
	}

	function updateSession() {
		setSessionData({
			token: generateToken(),
			session: sessionData.session + 1
		});
	}

	return (
		<theContext.Provider value={ sessionData }>
			<h1>Hooks: useState, useContext</h1>
			<ChildComponent1></ChildComponent1>
			<button onClick={ updateSession }>Update Session</button>
		</theContext.Provider>
	);
};

const ChildComponent1 = () => {

	const state = useContext( theContext );

	return (
		<div className="component-child">
			<h3>Componente hijo 1</h3>
			<p>El token es: { state.token }</p>
			<ChildComponent2></ChildComponent2>
		</div>
	);
};

const ChildComponent2 = () => {

	const state = useContext( theContext );

	return (
		<div className="component-child">
			<h3>Componente hijo 2</h3>
			<p>La sesion es: { state.session }</p>
		</div>
	);
};


export default Example3;
