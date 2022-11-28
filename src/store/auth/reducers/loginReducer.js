import { authTypes } from '../types.js';
import { AUTH_KEY, saveLocalStorage, removeLocalStorage, getLocalStorage } from '../../../helpers/localStorage.js';


// Define State
export const loginInitialState = {
    name: 'Auth-Login: Initial State',
    loading: false,
    data: {
        user: {},
        token: null
    },
    loggedIn: false,
    error: ''
};

// Auth Reducer
const loginReducer = ( state, action ) => {
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
            saveLocalStorage( AUTH_KEY, {
                user: action.payload.user,
                token: action.payload.token
            });

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
            removeLocalStorage( AUTH_KEY );

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
        case authTypes.GET_AUTH_USER:
            const authData = getLocalStorage( AUTH_KEY );
            console.log( authData );

            if ( authData !== null && authData?.user && authData?.token ) {
                console.log( 'Get Auth User LocalStorage' );

                return {
                    ...state,
                    loggedIn: true,
                    data: {
                        user: authData?.user,
                        token: authData?.token
                    }
                };
            }

            console.error( 'No authenticated user in local storage' );

            return state;

        default:
            return state;
    }
}


export default loginReducer;