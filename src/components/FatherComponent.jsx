import { useState } from 'react';
import ChildComponent from './ChildComponent';


const FatherComponent = () => {

	const [ name, setName ] = useState( 'Juan' );

	function showMessage( text ) {
		alert( `Message received ${ text }` );
	}

	function updateName( newName ) {
		console.log( newName );
		setName( newName );
	}

	return (
		<div style={ { border: '1px solid green', padding: '.5rem' } }>
			<p>Father Component</p>
			<ChildComponent
				name={ name }
				sendMessage={ showMessage }
				updateName={ updateName }
			></ChildComponent>
		</div>
	);
};


export default FatherComponent;
