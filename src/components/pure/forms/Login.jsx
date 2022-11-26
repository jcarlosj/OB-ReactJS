import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { fetchLogin } from '../../../services/fetchAuth.js';

import { validateEmail, validatePassword } from '../../../helpers/validate';

import { useAuthContext } from '../../../store/auth/authProvider.js';
import { authTypes } from '../../../store/auth/authTypes.js';

const Login = ({ setUserLogged }) => {

    const [ _, dispatch ] = useAuthContext();

    const
        [ loading, setLoading ] = useState( true ),
        [ message, setMessage ] = useState( '' ),
        [ formValues, handleInputChange, setError, reset ] = useForm({
            email: '',
            password: '',
            errorMessages: []
        }),
        { email, password, errorMessages } = formValues;

    useEffect(() => {

        console.log( errorMessages );

        setLoading( false );
    }, [ loading, errorMessages ]);

    const isFormValid = () => {

        setError({});           //  Inicializa campos de error cada que se valida el formulario
        setLoading( true );

        /** Validaciones: Agregara mensajes de error de ser necesario */
        const
            emailValid = validateEmail( email, setError ),
            passwordValid = validatePassword( password, setError );

        return emailValid && passwordValid;
    }

    const handleSubmit = async ( event ) => {
        event.preventDefault();

        if( isFormValid() ) {

            // LOGIN_LOADING
            dispatch({
                type: authTypes.LOGIN_PENDING
            });

            const data = await fetchLogin( email, password );
            console.log( data );

                // Verifica si se obtienen datos
            if( data.length === 0 )
                // LOGIN_FAILED
                dispatch({
                    type: authTypes.LOGIN_REJECTED,
                    payload: 'Error getting data'
                });

            const authenticatedUser = data.filter( user => user.email === email && user.password === password );

            // Verifica si se logro la autenticacion del usuario
            if( authenticatedUser.length === 0 )
                // LOGIN_FAILED
                dispatch({
                    type: authTypes.LOGIN_REJECTED,
                    payload: 'User authentication failed'
                });

            const authUser = authenticatedUser[ 0 ];

            delete authUser[ 'password' ];
            console.log( authUser );

            // LOGIN_SUCCESS
            dispatch({
                type: authTypes.LOGIN_FULFILLED,
                payload: {
                    token: 'here-token',
                    user: authUser,
                }
            });
            
            reset();

            setTimeout( () => {
                setMessage( '' );
            }, 2000 );
            
        }
        
    }

    return (
        <div className="container">

            <h1 className="page_title page_login">Login Page</h1>
            <p className="text-center">(Restricted: unauthenticated is required)</p>
            <form
                onSubmit={ handleSubmit }
            >
                {
                    errorMessages &&
                        <pre>
                            <code className="alert alert-error">
                                { JSON.stringify( errorMessages ) }
                            </code>
                        </pre>
                }
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="auth__input"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="auth__input"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        // disabled={ loading }
                    >
                        Login
                    </button>
                </div>
                <div className="form-control">
                    <Link 
                        to="/register"
                        className="link"
                    >
                        Create new account
                    </Link>
                </div>
                {
                    message &&
                        <p className="alert alert-success">
                            { message }
                        </p>
                }
            </form>

        </div>
    );
};


export default Login;
