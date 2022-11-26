import { authTypes } from '../types.js';


// Define State
export const registerInitialState = {
    name: 'Auth-Register: Initial State',
    loading: false,
    data: {},
    error: ''
};

// Auth Reducer
const registerReducer = ( state, action ) => {
    switch ( action.type ) {
        case authTypes.REGISTER_PENDING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case authTypes.REGISTER_FULFILLED:
            console.log( action.payload );
            return {
                ...state,
                loading: false,
                data: {
                    msg: 'Successful user registration!'
                },
                error: ''
            };
        case authTypes.REGISTER_REJECTED:
            return {
                ...state,
                loading: false,
                error: 'User registration failed'
            };
        case authTypes.REGISTER_RESET:
            return {
                loading: false,
                data: {},
                error: ''
            }

        default:
            return state;
    }
}


export default registerReducer;