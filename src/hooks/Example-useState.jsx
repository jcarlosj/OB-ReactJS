import { useState } from 'react';

/** Ejemplo 1: Implementacion de useState para controlar el estado del componente */

const Example1 = () => {

	const
		valorInicial = 0,
		personaInicial = {
			nombre: 'Fulanito de tal',
			email: 'fulanito@correo.co'
		}

	const
		[ counter, setCounter ] = useState( valorInicial ),
		[ persona, setPersona ] = useState( personaInicial );

	const { nombre, email } = persona;
	/**
	 * Actualiza estado privado del 'contador' en el componente
	 */
	function incrementCounter() {
		setCounter( counter + 1 );
	}

	/**
	 * Actualiza estado privado 'persona' en el componente
	 */
	function updatePersona() {
		setPersona({
			nombre: 'Perencejo',
			email: 'perencejo@correo.com',
		})
	}

	return (
		<div className="example-hook">
			<h1>Hook: useState</h1>
			<p>Este es un ejemplo básico de implementación de este hook</p>

			<h2>Datos</h2>
			<p><strong>Counter:</strong> { counter }</p>
			<p><strong>Nombre:</strong> { nombre }</p>
			<p><strong>Email:</strong> { email }</p>

			<button onClick={ incrementCounter }>+ 1</button>
			<button onClick={ updatePersona }>Update Data</button>
		</div>
	);
};


export default Example1;
