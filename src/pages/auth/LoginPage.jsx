import LoginFormik from '../../components/pure/forms/LoginFormik';

const LoginPage = ({ data, setData }) => {
    return (
		<div className="container mt-5">
			<h1>Login Page</h1>
			<LoginFormik data={ data } setData={ setData } ></LoginFormik>
		</div>
    );
}

export default LoginPage;
