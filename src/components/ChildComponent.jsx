import { useRef } from 'react';
import PropTypes from 'prop-types';


const ChildComponent = ({ name, sendMessage, updateName }) => {

	const
		messageRef = useRef( '' ),
		nameRef = useRef( '' );

	function pressButton() {
		alert( `Default text` );
	}

	function pressButtonParams( text ) {
		alert( `Text: ${ text }` );
	}

	/** Cuando se hace un submit por defecto se intenta recargar la pagina */
	function handleSubmit( event ) {
		event.preventDefault();		// Evita recarga de la pagina

		updateName( nameRef.current.value );
	}

	return (
		<div style={ { border: '1px dotted blue', margin: '0 auto', width: '90%'} }>
			<p onMouseOver={ () => console.log( `On Mouse Over` )}>
				{ `Child Component: ${ name }` }
			</p>

			<input
				placeholder='Insert a text to your father'
				onFocus={ () => { console.log( `Input Focused` ) } }
				onChange={ e => ( console.log( `Input changed`, e.target.value ) ) }
				onCopy={ e => { console.log( `Input copied`, e ) } }
				ref={ messageRef }
			/>

			<button
				onClick={ () => console.log( `Pressed button 1` ) }
			>Boton 1</button>
			<button
				onClick={ pressButton }
			>Boton 2</button>
			<button
				onClick={ () => pressButtonParams( 'Hello' ) }
			>Boton 3</button>
			<button
				onClick={ () => {
					const text = messageRef.current.value;
					sendMessage( `Hello Father: ${ text }` )
				} }
			>
				Send Message
			</button>
			<form
				style={ { border: '1px solid gray' , borderRadius: '5px', margin: '20px auto', width: '60%'} }
				onSubmit={ handleSubmit }
			>
				<input
					placeholder="New name"
					ref={ nameRef }
				/>
				<button
					type='submit'
				>Update</button>
			</form>
		</div>
	);
};


ChildComponent.propTypes = {
	name: PropTypes.string.isRequired,
	sendMessage: PropTypes.func.isRequired,
	updateName: PropTypes.func.isRequired
};


export default ChildComponent;
