import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

import { validateEmail, validatePassword } from '../../../helpers/validate';

const Login = () => {

    const
        [ loading, setLoading ] = useState( true ),
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

    const handleLogin = ( event ) => {
        event.preventDefault();

        if( isFormValid() ) {
            console.log( JSON.stringify({ email, password }) );

            // TODO: Valida si el usuario esta registrado
            // TODO: En caso de estar registrado guardar en localStorage datos del usuario logueado
            // TODO: Redireccionar en caso de loguearse

            reset();
        }
        
    }

    return (
        <div className="container">

            <h1 className="page_title page_login">Login Page</h1>
            <form
                onSubmit={ handleLogin }
            >
                {
                    errorMessages &&
                        <code className="auth__alert-error">
                            { JSON.stringify( errorMessages ) }
                        </code>
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

            </form>

        </div>
    );
};


export default Login;
