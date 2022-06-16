import { useState } from 'react';
import { getNumbers } from '../services/observableService';

const ObservableComponent = () => {

    const [ number, setNumber ] = useState( 0 );

    const newNumber = () => {
        // Subscricion al observable para obtener los datos
        getNumbers.subscribe( number => {
            console.log( number );
            setNumber( number )
        });
    }

    return (
        <div>
            <h1>Observables <span>(Ejemplos)</span></h1>
            <p>Se recomienda ver siempre la consola</p>

            <h3>Numbers { number }</h3>
            <button onClick={ newNumber }>
                Nuevo numero
            </button>
        </div>
    );
};


export default ObservableComponent;
