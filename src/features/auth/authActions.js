import { createAsyncThunk } from '@reduxjs/toolkit';


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

        const authUser = authenticatedUser[ 0 ];

        delete authUser[ 'password' ];
        console.log( authUser );

        return {
            user: authUser,
            token: 'here-token',
            msg: 'Successful login'
        };
        // ! NOTA: No requerimos el catch ya que el error es manejado         
    }
);

export const fetchRegister = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }) => {
        const
            response = await fetch( 'http://localhost:4000/users', {
                method: 'POST',
                body: JSON.stringify({
                    id: new Date().valueOf(),
                    name,
                    email,
                    password,
                    roles: [
                        'editor',
                        'user'
                    ]
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            data = response.json();

        console.log( data );

        return {
            user: { name, email },
            msg: 'Successful register'
        };
    }
);