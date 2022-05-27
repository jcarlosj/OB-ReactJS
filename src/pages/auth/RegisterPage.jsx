import RegisterFormik from '../../components/pure/forms/RegisterFormik';

const RegisterPage = ({ data, setData }) => {
    return (
		<div className="container mt-5">
			<h1>Register Page</h1>
			<RegisterFormik data={ data } setData={ setData }></RegisterFormik>
		</div>
    );
}

export default RegisterPage;
