import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

import { minLength, emailIsValid } from '../../../helpers/validate';

const Register = () => {

    const
        [ loading, setLoading ] = useState( true ),
        [ formValues, handleInputChange, setError, reset ] = useForm({
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            errorMessages: []
        }),
        { name, email, password, confirm_password, errorMessages } = formValues;

    useEffect(() => {

        console.log( errorMessages );

        setLoading( false );
    }, [ loading, errorMessages ]);

    const isFormValid = () => {
        let
            nameValid = false,
            emailValid = false,
            passwordValid = false,
            confirmPasswordValid = false;
        setError({});

         // ? Valida name
        if( ! name )
            setError({ 'name': 'Name is required!' });
        else
            nameValid = true;

        // ? Valida email
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

        // ? Valida confirm password
        if( ! confirm_password )
            setError({ 'confirm_password': 'Confirm password is required!' });
        else if( ! minLength( confirm_password, 5 ) )
            setError({ 'confirm_password': 'Password must be at least 5 characters' });
        else if( password !== confirm_password )
            setError({ 'confirm_password': 'Passwords do not match!' });
        else
            confirmPasswordValid = true;

        setLoading( true );

        return nameValid && emailValid && passwordValid && confirmPasswordValid;
    }

    const handleRegister = ( event ) => {
        event.preventDefault();

        if( isFormValid() ) {
            console.log( JSON.stringify({ name, email, password }) );

            // TODO: Valida si el usuario esta registrado
            // TODO: En caso de estar registrado guardar en localStorage datos del usuario logueado
            // TODO: Redireccionar en caso de loguearse

            reset();
        }
        
    }

    return (
        <div className="container">
            <h1 className="page_title page_register">Register Page</h1>
            <form
                onSubmit={ handleRegister }
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
                        placeholder="Name"
                        name="name"
                        className="auth__input"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="auth__input"
                        autoComplete="off"
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
                        autoComplete="off"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirm_password"
                        className="auth__input"
                        autoComplete="off"
                        value={ confirm_password }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mtb-3"
                        // disabled={ loading }
                    >
                        Register
                    </button>
                </div>
                <div className="form-control">
                    <Link 
                        to="/login"
                        className="link"
                    >
                        Already registered?
                    </Link>
                </div>
            </form>
        </div>
    );
};


export default Register;