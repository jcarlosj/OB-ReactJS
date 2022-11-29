import React, { useReducer, useContext } from 'react';

import { TaskContext } from './context.js';
import taskReducer, { taskInitialState } from './reducer.js';


/** Hook Personalizado para crear un contexto */
const useTaskContext = () => {
    
    // useContext: Devuelve el valor del contexto actual, acepta un objeto de contexto.
    return useContext( TaskContext );
}

// * Define Funcional Component (Provider)
const TaskProvider = ({ children }) => {

    // * Define State Component > useReducer: Gestiona el estado global a través de actualizaciones profundas en todos los componentes 
    const [ state, dispatch ] = useReducer( taskReducer, taskInitialState );

    // console.log( state );

    return (
        <TaskContext.Provider
            value={ [ state, dispatch ] }
        >
            { children }
        </TaskContext.Provider>
    );

}

export {
    TaskProvider,
    useTaskContext
}