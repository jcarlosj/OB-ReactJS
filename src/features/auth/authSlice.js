import { createSlice } from '@reduxjs/toolkit';

import { fetchLogin, fetchRegister } from './authActions.js';
import { AUTH_KEY, saveLocalStorage, removeLocalStorage } from '../../helpers/localStorage.js';


// ! initial state ( default values )
const initialState = {
    loading: false,
    data: {
        user: {},
        token: null,
    },
    msg: {
        error: '',
        success: ''
    }
};

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: ( state, action ) => {
            console.log( 'Logout' );
            state.data = {
                user: {},
                token: null,
            };
            state.msg = {
                error: '',
                success: 'Successful logout'
            };
            removeLocalStorage( AUTH_KEY );
        }
    },
    extraReducers: ( builder ) => {
        // Casos para login de usuario
        builder
            .addCase( fetchLogin.pending, state => {
                state.loading = true;
            })
            .addCase( fetchLogin.fulfilled, ( state, action ) => {
                state.loading = false;
                state.data = {
                    user: action.payload.user,
                    token: action.payload.token
                };
                state.msg = {
                    error: '',
                    success: action.payload.msg
                };
                saveLocalStorage( AUTH_KEY, {
                    user: action.payload.user,
                    token: action.payload.token
                });
            })
            .addCase( fetchLogin.rejected, ( state, action ) => {
                state.loading = false;
                state.data = {
                    user: {},
                    token: null
                };
                state.msg = {
                    error: action.payload,
                    success: ''
                };
            });
        // Casos para registro de usuario
        builder
            .addCase( fetchRegister.pending , state => {
                state.loading = true;
            })
            .addCase( fetchRegister.fulfilled , ( state, action ) => {
                state.loading = false;
                state.msg = {
                    error: '',
                    success: action.payload.msg
                };
            })
            .addCase( fetchRegister.rejected , ( state, action ) => {
                state.loading = false;
                state.data = {
                    user: {},
                    token: null
                };
                state.msg = {
                    error: action.payload,
                    success: ''
                };
            });
        
    }
});


export const { logout } = authSlice.actions;

export default authSlice.reducer;         // ? Exportamos sus reducers