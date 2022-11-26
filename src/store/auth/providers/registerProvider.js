import React, { useReducer, useContext } from 'react';

import { RegisterContext } from '../context/registerContext.js';
import registerReducer, { registerInitialState } from '../reducers/registerReducer.js';


/** Hook Personalizado para crear un contexto */
const useRegisterContext = () => {
    
    // useContext: Devuelve el valor del contexto actual, acepta un objeto de contexto.
    return useContext( RegisterContext );
}

// * Define Funcional Component (Provider)
const RegisterProvider = ({ children }) => {

    // * Define State Component > useReducer: Gestiona el estado global a través de actualizaciones profundas en todos los componentes 
    const [ state, dispatch ] = useReducer( registerReducer, registerInitialState );

    console.log( state );

    return (
        <RegisterContext.Provider
            value={ [ state, dispatch ] }
        >
            { children }
        </RegisterContext.Provider>
    );

}

export {
    RegisterProvider,
    useRegisterContext
}