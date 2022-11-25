import { authTypes } from './authTypes.js';


// Define State
export const initialState = {
    name: 'Auth',
    loading: false,
    data: {
        user: {},
        token: null
    },
    loggedIn: false,
    error: ''
};

// Auth Reducer
const authReducer = ( state, action ) => {
    switch ( action.type ) {
        case authTypes.FIELD:
            return {
                ...state,
                [ action.fieldName ] : action.payload
            };
        case authTypes.LOGIN_PENDING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case authTypes.LOGIN_FULFILLED:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                data: {
                    user: action.payload.user,
                    token: action.payload.token
                },
                error: ''
            };
        case authTypes.LOGIN_REJECTED:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: 'Invalid Username or Password'
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                data: {
                    user: {},
                    token: null
                },
                loading: false,
                loggedIn: false,
                error: ''
            };

        default:
            return state;
    }
}


export default authReducer;