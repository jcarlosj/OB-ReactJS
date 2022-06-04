import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="container">

            <h1 className="page_title page_login">Login Page</h1>
            <form
                // onSubmit={ handleLogin }
            >
                {/* {
                    errorMessage &&
                        <div className="auth__alert-error">
                            { errorMessage }
                        </div>
                } */}
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="auth__input"
                        // value={ email }
                        // onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="auth__input"
                        // value={ password }
                        // onChange={ handleInputChange }
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
