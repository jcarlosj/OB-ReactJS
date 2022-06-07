import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';


const Login = () => {

    const
        [ formValues, handleInputChange, setError, reset, emailIsValid ] = useForm({
            email: '',
            password: '',
            errors: []
        }),
        { email, password, errors } = formValues;

    const isFormValid = () => {
        if( ! emailIsValid( email ) ) {
            setError({ 'email': 'Email is not valid!' });
        }
        if( password.length <= 5 ) {
            setError({ 'password': 'Password must be at least 5 characters' });
        }

        console.log( errors );
    }

    const handleLogin = ( event ) => {
        event.preventDefault();

        isFormValid();
    }

    return (
        <div className="container">

            <h1 className="page_title page_login">Login Page</h1>
            <form
                onSubmit={ handleLogin }
            >
                {
                    errors &&
                        <code className="auth__alert-error">
                            { JSON.stringify( errors ) }
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
