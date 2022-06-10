import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

import { validateName, validateEmail, validatePassword, validateAndConfirmPassword } from '../../../helpers/validate';
import { registerUser } from '../../../helpers/localStorage';

const Register = () => {

    const
        [ loading, setLoading ] = useState( true ),
        [ message, setMessage ] = useState( '' ),
        [ formValues, handleInputChange, setError, reset ] = useForm({
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            errorMessages: []
        }),
        { name, email, password, confirm_password, errorMessages } = formValues;

    useEffect(() => {

        // console.log( errorMessages );

        setLoading( false );
    }, [ loading ]);

    const isFormValid = () => {
        
        setError({});           //  Inicializa campos de error cada que se valida el formulario
        // setLoading( true );

        /** Validaciones: Agregara mensajes de error de ser necesario */
        const
            nameValid = validateName( name, setError ),
            emailValid = validateEmail( email, setError ),
            passwordValid = validatePassword( password, setError ),
            confirmPasswordValid = validateAndConfirmPassword( confirm_password, password, setError );

        return nameValid && emailValid && passwordValid && confirmPasswordValid;
    }

    const handleRegister = async ( event ) => {
        event.preventDefault();

        if( isFormValid() ) {
            // console.log( JSON.stringify({ name, email, password }) );

            const confirmationMessage = await registerUser({ name, email, password });
            setMessage( confirmationMessage );

            reset();

            setTimeout( () => {
                setMessage( '' );
            }, 2000 );
        }
        
    }

    return (
        <div className="container">
            <h1 className="page_title page_register">Register Page</h1>
            <p className="text-center">(Restricted: unauthenticated is required)</p>
            <form
                onSubmit={ handleRegister }
            >
                {
                    errorMessages &&
                        <code className="alert alert-error">
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
                {
                    message &&
                        <code className="alert alert-success">
                            { message }
                        </code>
                }
            </form>
        </div>
    );
};


export default Register;