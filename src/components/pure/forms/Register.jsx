import { useState } from 'react';
import PropTypes from 'prop-types';


const Register = () => {

	const initialData = [{
		user: '',
		name: '',
		email: '',
		passwd: ''
	}];

	const [ data, setData ] = useState( initialData );

	return (
		<div className="container mt-5">
			<h1>Register Form</h1>
		</div>
	);
};


Register.propTypes = {

};


export default Register;
