import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';


const LoginFormik = () => {

	const initialCredentials = {
		email: '',
		passwd: ''
	}

	return (
		<>
			<h4>Login Formik</h4>
			<Formik
				initialValues={ initialCredentials }
				onSubmit={ async ( values ) => {
					await new Promise( ( response ) => setTimeout( response, 500 ) );
					alert( JSON.stringify( values, null, 4 ) );
				} }
			>
				<Form>

					<label htmlFor="email">Email</label>
					<Field
						id="email"
						type="email"
						name="email"
						placeholder="example@email.co"
					/>

					<label htmlFor="email">Password</label>
					<Field
						id="password"
						type="password"
						name="passwd"
						placeholder="Password"
					/>

					<button type="submit">Login</button>

				</Form>
			</Formik>
		</>
	);
};


LoginFormik.propTypes = {

};


export default LoginFormik;
