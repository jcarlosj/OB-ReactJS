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
                error: action.payload
            };

        default:
            return state;
    }
}


export default taskReducer;