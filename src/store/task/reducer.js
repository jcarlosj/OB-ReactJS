import { taskTypes } from './types.js';


// Define State
export const taskInitialState = {
    name: 'Task: Initial State',
    loading: false,
    data: [],
    error: ''
};

// Task Reducer
const taskReducer = ( state, action ) => {
    switch ( action.type ) {
        // Casuistica para obtener todas las tareas
        case taskTypes.GET_TASKS_PENDING:
            return {
                ...state,
                loading: true
            };
        case taskTypes.GET_TASKS_FULFILLED:
            // console.log( action.payload );
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case taskTypes.GET_TASKS_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        // Casuistica para eliminar una tarea por ID
        case taskTypes.DELETE_TASK_PENDING: 
            return {
                ...state,
                loading: true
            }
        case taskTypes.DELETE_TASK_FULFILLED:
            return {
                ...state,
                loading: false,
                data: state.data.filter( task => task.id !== action.payload )
            }
        case taskTypes.DELETE_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        // Casuistica para agregar tarea
        case taskTypes.ADD_TASK_PENDING:
            return {
                ...state,
                loading: true
            }
        case taskTypes.ADD_TASK_FULFILLED:
            // console.log( action.payload );
            return {
                ...state,
                loading: false,
                data: [ ...state.data, action.payload ]
            }
        case taskTypes.ADD_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        // Casuistica para obtener tarea por ID
        case taskTypes.GET_TASK_PENDING:
            return {
                ...state
            };
        case taskTypes.GET_TASK_FULFILLED:
            console.log( action.payload );
            return {
                ...state,
            };
        case taskTypes.GET_TASK_REJECTED:
            return {
                ...state,
                error: action.payload,
            };
        // Casuistica para cambiar estado de la tarea
        case taskTypes.COMPLETE_TASK_PENDING:
            return {
                ...state,
                loading: true
            };
        case taskTypes.COMPLETE_TASK_FULFILLED:
            console.log( action.payload );
            return {
                ...state,
                loading: false,
                data: state.data.map( task => {
                    if ( task.id === action.payload.id )
                        return action.payload;
                    else
                        return task;
                })
            }
        case taskTypes.COMPLETE_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}


export default taskReducer;