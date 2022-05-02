import { useState, useEffect, useRef } from 'react';

/** Ejemplo 2: Implementacion de
 *    1. useEffect identificar cambios del componente.
 *    2. useRef referenciar un elemento en el DOM del componente
 * */

const Example2 = () => {

	const
		[ counter1, setCounter1 ] = useState( 0 ),
		[ counter2, setCounter2 ] = useState( 0 ),
		elRef = useRef();

	function incrementCounter1() {
		setCounter1( counter1 + 1 );
	}

	function incrementCounter2() {
		setCounter2( counter2 + 1 );
	}

	/** Caso 1: Ejecutar siempre un snippet de código cada que haya un cambio en el estado del componente */
	// useEffect( () => {
	// 	console.log( 'Invoca useEffect' );
	// 	console.log( elRef );
	// });

	/** Caso 2: Ejecutar solo cuando cambie el contador 1 */
	useEffect( () => {
		console.log( 'Invoca useEffect' );
		console.log( elRef );
	}, [ counter1 ] );

	return (
		<div className="example-hook">
			<h1>Hooks: useState, useEffect, useRef</h1>
			<p>Este es un ejemplo básico de implementación de este hook</p>

			<h2>Datos</h2>
			<p><strong>Counter 1:</strong> { counter1 }</p>
			<p><strong>Counter 2:</strong> { counter2 }</p>

			<h3 ref={ elRef }>Este elemento esta referenciado</h3>

			<button onClick={ incrementCounter1 }>+ 1 (Counter 1)</button>
			<button onClick={ incrementCounter2 }>+ 1 (Counter 2)</button>

		</div>
	);
};


export default Example2;
