import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { fetchRegister } from '../../../services/fetchAuth.js';

import { validateName, validateEmail, validatePassword, validateAndConfirmPassword } from '../../../helpers/validate';

import { useRegisterContext } from '../../../store/auth/providers/registerProvider.js';
import { authTypes } from '../../../store/auth/types.js';


// Functional Component
const FormRegister = () => {

    const [ state, dispatch ] = useRegisterContext();

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

            // REGISTER_LOADING
            dispatch({
                type: authTypes.REGISTER_PENDING
            });

            const data = await fetchRegister( name, email, password );
            console.log( data );         

            // // REGISTER_FAILED
            // dispatch({
            //     type: authTypes.REGISTER_REJECTED,
            //     payload: data.error
            // });
            // setMessage( data.error );

            // REGISTER_SUCCESS
            dispatch({
                type: authTypes.REGISTER_FULFILLED
            });

            reset();

            setTimeout( () => {
                // REGISTER_RESET
                dispatch({
                    type: authTypes.REGISTER_RESET
                });
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


export default FormRegister;