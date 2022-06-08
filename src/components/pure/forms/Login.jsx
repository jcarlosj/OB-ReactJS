import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

import { minLength, emailIsValid } from '../../../helpers/validate';

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
        let
            emailValid = false,
            passwordValid = false;
        setError({});

        // ? Valida correo
        if( ! email )
            setError({ 'email': 'Email is required!' });
        else if( ! emailIsValid( email ) )
            setError({ 'email': 'Email is not valid!' });
        else
            emailValid = true;

        // ? Valida password
        if( ! password )
            setError({ 'password': 'Password is required!' });
        else if( ! minLength( password, 5 ) )
            setError({ 'password': 'Password must be at least 5 characters' });
        else
            passwordValid = true;

        setLoading( true );

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
