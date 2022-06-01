import LoginFormik from '../../components/pure/forms/LoginFormik';

import Footer from '../../components/ui/Footer';

const LoginPage = ({ data, setData }) => {
    return (
		<div className="container mt-5">
			<h1>Login Page</h1>
			<LoginFormik data={ data } setData={ setData } ></LoginFormik>
			<Footer />
		</div>
    );
}

export default LoginPage;
