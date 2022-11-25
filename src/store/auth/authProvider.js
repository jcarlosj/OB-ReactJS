import React, { useReducer, useContext } from 'react';

import { AuthContext } from './authContext.js';
import authReducer, { initialState } from './authReducer.js';


/** Hook Personalizado para crear un contexto */
const useAuthContext = () => {
    
    // useContext: Devuelve el valor del contexto actual, acepta un objeto de contexto.
    return useContext( AuthContext );
}

// * Define Funcional Component (Provider)
const AuthProvider = ({ children }) => {

    // * Define State Component > useReducer: Gestiona el estado global a través de actualizaciones profundas en todos los componentes 
    const [ state, dispatch ] = useReducer( authReducer, initialState );

    console.log( state );

    return (
        <AuthContext.Provider
            value={ [ state, dispatch ] }
        >
            { children }
        </AuthContext.Provider>
    );

}

export {
    AuthProvider,
    useAuthContext
}