import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

import { setRegisteredUserData } from '../../../helpers/localStorage';

/** Define esquema de analisis para la validacion valores */
const registerSchema = Yup.object().shape({
	username: Yup.string()
			.min( 6, 'Username too short' )
			.max( 12, 'Username too long' )
			.required( 'User is required!' ),
	role: Yup.string()
			.oneOf([
				ROLES.USER,
				ROLES.ADMIN
			], 'You must select a role user/admin' )
			.required( 'Role is required!' ),
	email: Yup.string()
			.email( 'Invalid email format!' )
			.required( 'Email is required!' ),
	passwd: Yup.string()
			.min( 8, 'Password too short' )
			.required( 'Password is required!' ),
	passwd_confirm: Yup.string()
			.when( 'passwd', {
				is: value => value?.length > 0 ? true : false,
				then: Yup.string().oneOf([ Yup.ref( 'passwd' )], 'Password must match!' )
			} )
			.required( 'You must confirm the password' )
});



/** Functional Component */
const RegisterFormik = () => {

	const initialValues = {
		username: '',
		email: '',
		passwd: '',
		passwd_confirm: '',
		role: ROLES.USER
	}

	const [ state, setState ] = useState({
		user: {
			username: '',
			email: '',
			passwd: '',
			logged: false,
			role: ROLES.USER
		},
		registered_users: []
	});

	const { user, registered_users } = state;

	useEffect( () => {
		const
			stringUsers = localStorage.getItem( 'registered' ),
			data = JSON.parse( stringUsers );

			console.log( 'registered:', data );
	}, [ state.user ] );

	const handleSubmit = ( values ) => {

		const newUser = new User(
			values.username,
			values.email,
			values.passwd,
			ROLES.USER
		);

		console.log( 'Register user', newUser );

		setState({
			...state,
			registered_users: [ ...registered_users, newUser ]
		});

		setRegisteredUserData( [ ...registered_users, newUser ] );

		/** Limpia campos del formulario */
		for ( const key in values ) {
			values[ key ] = '';
		}
	}

	return (
		<div className="container mt-5">
			<h4>Register Formik</h4>
			<Formik
				initialValues = { initialValues }
				validationSchema={ registerSchema }
				onSubmit={ async ( values ) => {
					await new Promise( ( response ) => setTimeout( response, 2000 ) );

					alert( JSON.stringify( values, null, 4 ) );
					console.log( values );

					handleSubmit( values );
				} }
			>
				{/** We obtain props from Formik */}
				{ ( { errors, touched, isSubmitting } ) => (
					<Form>
						<label htmlFor="username">Username</label>
						<Field
							id="username"
							type="text"
							name="username"
							placeholder=""
						/>
						<ErrorMessage name="username" render={ msg => <p><small>{ msg }</small></p>} />

						<label htmlFor="email">Email</label>
						<Field
							id="email"
							type="email"
							name="email"
							placeholder="example@email.co"
						/>
						<ErrorMessage name="email" render={ msg => <p><small>{ msg }</small></p>} />

						<label htmlFor="password">Password</label>
						<Field
							id="password"
							type="password"
							name="passwd"
							placeholder="Password"
						/>
						<ErrorMessage name="passwd" render={ msg => <p><small>{ msg }</small></p>} />

						<label htmlFor="passwd_confirm">Password confirm</label>
						<Field
							id="passwd_confirm"
							type="password"
							name="passwd_confirm"
							placeholder="Password confirm"
						/>
						<ErrorMessage name="passwd_confirm" render={ msg => <p><small>{ msg }</small></p>} />

						<button type="submit">Register account</button>
						{	isSubmitting ? <p>Sending your credentials</p> : null }

					</Form>
				)}
			</Formik>
		</div>
	);
};


export default RegisterFormik;
