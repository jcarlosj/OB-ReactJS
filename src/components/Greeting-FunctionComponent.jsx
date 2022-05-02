import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Greeting = ( props ) => {

    const [ age, setAge ] = useState( 44 );

    const birthday = () => {
		// Modifica el estado del componente
		setAge( prevState => ({ 
            age: prevState.age + 1 
        }))
	}

    return (
        <div>
            <h1>Hola, { props.name }!</h1>
            <p>Tu edad es: { age }</p>
            <div>
                <button onClick={ birthday } >+ 1 a edad</button>
            </div>
        </div>
    );
};


Greeting.propTypes = {
    name: PropTypes.string.isRequired
};


export { Greeting };
