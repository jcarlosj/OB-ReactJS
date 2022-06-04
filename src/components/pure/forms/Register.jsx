import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="container">
            <h1 className="page_title page_register">Register Page</h1>
            <form
                // onSubmit={ handleRegister }
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
                        placeholder="Name"
                        name="name"
                        className="auth__input"
                        autoComplete="off"
                        // value={ name }
                        // onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="auth__input"
                        autoComplete="off"
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
                        autoComplete="off"
                        // value={ password }
                        // onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirm_password"
                        className="auth__input"
                        autoComplete="off"
                        // value={ confirm_password }
                        // onChange={ handleInputChange }
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