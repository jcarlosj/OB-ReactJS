import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


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
}

// ! Define async action creator: an action creator returns an action (Invocamos la creacion de un proceso asincrono)
// ? fetchLogin: El proceso asincrono generará tipos de acciones pendientes, cumplidas y rechazadas
export const fetchLogin = createAsyncThunk( 
    'auth/login',          // ? 'nombre de la accion' (action type)
    async ({ email, password }, { rejectWithValue }) => {               // ? funcion callback que crea el payload
        const
            response = await fetch( 'http://localhost:4000/users', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            data = await response.json();
        
        console.log( data );

        // Verifica si se obtienen datos
        if( data.length === 0 )
            return rejectWithValue( 'Error getting data' );
        
        const authenticatedUser = data.filter( user => user.email === email && user.password === password );

        // Verifica si se logro la autenticacion del usuario
        if( authenticatedUser.length === 0 )
            return rejectWithValue( 'User authentication failed' );

        return {
            user: { email, password },
            token: 'here-token',
            msg: 'Successful login'
        };
        // ! NOTA: No requerimos el catch ya que el error es manejado         
    }
);

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: ( builder ) => {
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
    }
});


export default authSlice.reducer;         // ? Exportamos sus reducers