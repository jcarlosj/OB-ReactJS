import { taskTypes } from './types.js';


// Define State
export const taskInitialState = {
    name: 'Task: Initial State',
    loading: false,
    data: {},
    error: ''
};

// Task Reducer
const taskReducer = ( state, action ) => {
    switch ( action.type ) {
        case taskTypes.TASK_PENDING:
            return {
                ...state,
                loading: true
            };
        case taskTypes.TASK_FULFILLED:
            // console.log( action.payload );
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case taskTypes.TASK_REJECTED:
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