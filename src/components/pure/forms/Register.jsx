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
		<div>

		</div>
	);
};


Register.propTypes = {

};


export default Register;
