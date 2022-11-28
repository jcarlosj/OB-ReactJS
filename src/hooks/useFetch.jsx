import { useState, useEffect } from 'react';


// Hook Initial State
const initialState = {
    data: [],
    state: 'idle'
};

// Custom Hook: Fetch API
const useFetch = ( url ) => {
    const [ stateHook, setStateHook ] = useState( initialState );


    useEffect( () => {
        if( ! url ) return;

        setStateHook({
            ...stateHook,
            state: 'fetching'
        });

        const getAllTasks = async () => {
            const
                response = await fetch( url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }),
                data = await response.json();

            console.log( data );

            // Verifica si el valor no es un array de datos (Error en la peticion)
            if( ! Array.isArray( data ) ) {
                return setStateHook({
                    ...stateHook,
                    state: 'error'
                });
            }

            // Verifica si la peticion no retorna datos
            if( data.length === 0 ) {
                return setStateHook({
                    ...stateHook,
                    state: 'not-found-data'
                });
            }

            setStateHook({
                ...stateHook,
                data,
                state: 'fetched'
            });
        }
        getAllTasks();

    }, [ url ] );


    return stateHook;
}


export default useFetch;
