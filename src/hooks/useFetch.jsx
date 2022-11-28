import { useState, useEffect } from 'react';


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

        setStateHook({
            ...stateHook,
            status: REQUEST_STATUS.FETCHING
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
        }
        getAllTasks();

    }, [ url ] );


    return stateHook;
}


export default useFetch;
