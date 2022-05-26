import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { setUserCredentialData, getAuthenticatedUser } from '../../../helpers/localStorage';

/** Define esquema de analisis para la validacion valores */
const loginSchema = Yup.object().shape({
	email: Yup.string()
			.email( 'Invalid email format!' )
			.required( 'Email is required!' ),
	passwd: Yup.string()
			.required( 'Password is required!' )
});



/** Functional Component */
const LoginFormik = ({ data, setData }) => {

	console.log( 'data', data );

	const initialCredentials = {
		email: '',
		passwd: ''
	}

	const handleSubmit = ( values ) => {

		// console.log( 'values', values );
		// console.log( 'data.users', data.users );
		// console.log( 'authenticate user: ', getAuthenticatedUser( data.users, values ) );

		if( data?.users ) {
			const user_credentials = getAuthenticatedUser( data.users, values );

			console.log( user_credentials );

			if( user_credentials ) {

				setData({
					...data,
					logged_user: user_credentials,
					logged: true
				});
				setUserCredentialData( user_credentials );

			}
		}

		/** Limpia campos del formulario */
		for ( const key in values ) {
			values[ key ] = '';
		}

	}

	console.log( 'data', data );

	return (
		<div className="container mt-5">
			<h4>Login Formik</h4>
			<Formik
				initialValues={ initialCredentials }
				validationSchema={ loginSchema }
				onSubmit={ async ( values ) => {
					await new Promise( ( response ) => setTimeout( response, 2000 ) );
					alert( JSON.stringify( values, null, 4 ) );

					handleSubmit( values );
				} }
			>

				{/** We obtain props from Formik
				 * values,			(Valores del formulario)
				 * touched,    		(Campos que han sido tocados)
				 * errors,      	(Errores del formulario)
				 * isSubmitting,	(Indica si se estan enviando datos del formulario)
				 * handleChange,   	(Cuando hay un cambio en un campo)
				 * handleBlur, 		(Cuando hay un cambio de foco)
				 * handleSubmit, 	(Cuando enviamos datos del formulario)
				*/}
				{ ( { errors, touched, isSubmitting } ) => (
					<Form>
						<label htmlFor="email">Email</label>
						<Field
							id="email"
							type="email"
							name="email"
							placeholder="example@email.co"
						/>
						<ErrorMessage name="email" render={ msg => <p><small>{ msg }</small></p>} />

						<label htmlFor="email">Password</label>
						<Field
							id="password"
							type="password"
							name="passwd"
							placeholder="Password"
						/>
						<ErrorMessage name="passwd" render={ msg => <p><small>{ msg }</small></p>} />

						<button type="submit">Login</button>
						{	isSubmitting ? <p>Login you credentials</p> : null }

					</Form>
				)}

			</Formik>
		</div>
	);
};


export default LoginFormik;
