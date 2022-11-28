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
            return {};
        case taskTypes.TASK_FULFILLED:
            console.log( action.payload );
            return {};
        case taskTypes.TASK_REJECTED:
            return {};

        default:
            return state;
    }
}


export default taskReducer;