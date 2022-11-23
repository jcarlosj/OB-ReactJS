import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchLogin } from '../../../features/auth/authActions';
import { useForm } from '../../../hooks/useForm';
import { validateEmail, validatePassword } from '../../../helpers/validate';


const Login = ({ setUserLogged }) => {

    const dispatch = useDispatch();

    const
        [ isLoading, setIsLoading ] = useState( true ),
        [ message, setMessage ] = useState( '' ),
        [ formValues, handleInputChange, setError, reset ] = useForm({
            email: '',
            password: '',
            errorMessages: []
        }),
        { email, password, errorMessages } = formValues;


    useEffect(() => {
        // console.log( errorMessages );

        setIsLoading( false );
    }, [ isLoading, errorMessages ]);


    const isFormValid = () => {

        setError({});           //  Inicializa campos de error cada que se valida el formulario
        setIsLoading( true );

        /** Validaciones: Agregara mensajes de error de ser necesario */
        const
            emailValid = validateEmail( email, setError ),
            passwordValid = validatePassword( password, setError );

        return emailValid && passwordValid;
    }

    const handleOnSubmit = async ( event ) => {
        event.preventDefault();

        if( isFormValid() ) {

            dispatch( 
                fetchLogin({
                    email,
                    password
                }) 
            );
            
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
                onSubmit={ handleOnSubmit }
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
