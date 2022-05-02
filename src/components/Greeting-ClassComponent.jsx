import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

	constructor( props ) {
		super( props );

		// Define estado del componente
		this.state = {
			age: 44
		}
	}

	render() {
		return (
			<>
				<h1>Hola, { this.props.name }!</h1>
				<p>Tu edad es: { this.state.age }</p>
				<div>
					<button onClick={ this.birthday } >+ 1 a edad</button>
				</div>
			</>
		);
	}

	// Si no usamos una funcion flecha debemos hacer un binding de la funcion
	birthday = () => {
		// Modifica el estado del componente
		this.setState( prevState => (
			{ age: prevState.age + 1 }
		))
	}
}


Greeting.propTypes = {
	name: PropTypes.string.isRequired
};


export default Greeting;
