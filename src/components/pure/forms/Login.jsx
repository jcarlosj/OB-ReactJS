import { useState } from 'react';
import PropTypes from 'prop-types';


const Login = () => {

	const initialCredentials = {
		user: '',
		passwd: ''
	}

	const [ credentials, setCredentials ] = useState( initialCredentials );

	return (
		<div>

		</div>
	);
};


Login.propTypes = {

};


export default Login;
