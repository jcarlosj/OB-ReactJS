import { useState } from 'react';
import PropTypes from 'prop-types';


const Login = () => {

	const initialCredentials = {
		user: '',
		passwd: ''
	}

	const [ credentials, setCredentials ] = useState( initialCredentials );

	return (
		<div className="container mt-5">
			<h1>Login Form</h1>
		</div>
	);
};


Login.propTypes = {

};


export default Login;
