import { useState, useEffect } from 'react';


// Cache
const cache = {};

// Request statuses
export const REQUEST_STATUS = {
    IDLE:       'idle',
    FETCHING:   'fetching',
    ERROR:      'error',
    NOT_FOUND:  'not found',
    SUCCESS:    'success'
}

// Hook Initial State
const initialState = {
    status: REQUEST_STATUS.IDLE,  // idle | fetching | error | not-found | success
    data: [],
    error: ''
};

// Custom Hook: Fetch API
const useFetch = ( url ) => {
    
    const [ stateHook, setStateHook ] = useState( initialState );


    useEffect( () => {
        if( ! url ) return;

        const fetchGetTasks = async () => {

            console.log( 'CACHE', cache );

            setStateHook({
                ...stateHook,
                status: REQUEST_STATUS.FETCHING
            });

            // Verifica si la peticion ya esta almacenada en 'cache'.
            if( cache[ url ] ) {
                const data = cache[ url ];      // Tomamos los datos almacenados en cache y los enviamos al ContextAPI para desplegarlos en la Vista

                setStateHook({
                    ...stateHook,
                    data,
                    status: REQUEST_STATUS.SUCCESS
                });

                console.info( 'Get data from CACHE' );
            }
            else {
                // Si no hay datos en 'cache', hace consulta a la API.
                const
                    response = await fetch( url, {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    }),
                    data = await response.json();

                console.log( data );

                cache[ url ] = data;    // Establecemos el valor del cache obtenido de la data del FetchAPI, los enviamos al ContextAPI para desplegarlos en la Vista

                // Verifica si el valor no es un array de datos (Error en la peticion)
                if( ! Array.isArray( data ) ) {
                    return setStateHook({
                        ...stateHook,
                        status: REQUEST_STATUS.ERROR,
                        error: 'Request Error'
                    });
                }

                // Verifica si la peticion no retorna datos
                if( data.length === 0 ) {
                    return setStateHook({
                        ...stateHook,
                        status: REQUEST_STATUS.NOT_FOUND,
                        error: 'Data Not Found'
                    });
                }

                setStateHook({
                    ...stateHook,
                    data,
                    status: REQUEST_STATUS.SUCCESS
                });

                console.info( 'Get data from API' );
            }
        }
        fetchGetTasks();

    }, [ url ] );


    return stateHook;
}


export default useFetch;
