import React, { useReducer, useContext } from 'react';

import { LoginContext } from '../context/loginContext.js';
import loginReducer, { loginInitialState } from '../reducers/loginReducer.js';


/** Hook Personalizado para crear un contexto */
const useLoginContext = () => {
    
    // useContext: Devuelve el valor del contexto actual, acepta un objeto de contexto.
    return useContext( LoginContext );
}

// * Define Funcional Component (Provider)
const LoginProvider = ({ children }) => {

    // * Define State Component > useReducer: Gestiona el estado global a través de actualizaciones profundas en todos los componentes 
    const [ state, dispatch ] = useReducer( loginReducer, loginInitialState );

    console.log( state );

    return (
        <LoginContext.Provider
            value={ [ state, dispatch ] }
        >
            { children }
        </LoginContext.Provider>
    );

}

export {
    LoginProvider,
    useLoginContext
}