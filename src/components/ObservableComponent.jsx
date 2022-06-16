import { useState } from 'react';
import { getNumbers } from '../services/observableService';

const ObservableComponent = () => {

    const [ number, setNumber ] = useState( 0 );

    const newNumber = () => {
        // Subscricion al observable para obtener los datos
        getNumbers.subscribe({
            next( newNumber ) {     // Hace las veces de then
                console.log( 'New number: ', newNumber );
                setNumber( newNumber );
            },
            error( err ) {          // Hace las veces de catch
                alert( `Something went wrong: ${ err }`);
                console.error( `Something went wrong: ${ err }`);
            },
            complete() {            // Hace las veces de finally
                alert( `Finished with: ${ number }` );
                console.info( `Done with the observable!` );
            }
        });

        console.log( number );
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
