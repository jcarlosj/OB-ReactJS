import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login } from '../../services/axios.services';

/** Define esquema de analisis para la validacion valores */
const loginSchema = Yup.object().shape({
	email: Yup.string()
			.email( 'Invalid email format!' )
			.required( 'Email is required!' ),
	passwd: Yup.string()
			.required( 'Password is required!' )
});


/** Functional Component */
const LoginFormik = () => {

	const [ loading, setLoading ] = useState( true );

	const initialCredentials = {
		email: '',
		passwd: ''
	}

    const authUser = ({ email, passwd }) => {
        console.log( email, passwd );

        login( email, passwd )
            .then( response => {

                if( response.data.token ) {
                    console.log( response.data );
                    alert( JSON.stringify( response.data, false, 4 ) );

                    sessionStorage.setItem( 'token', response.data.token );

                    console.log( `${ email } se ha logueado!` );
                }
                else {
                    sessionStorage.removeItem( 'token' );
                    alert( 'Login failed, please check your credentials' );
                    throw new Error( 'Login failed, please check your credentials' );
                }

            })
            .catch( err => {
                sessionStorage.removeItem( 'token' );
                alert( `Something went wrong: ${ err }` );
                console.log( `Something went wrong: ${ err }` );
            })
            .finally( () => console.log( `Finally Done!` ) );
    }

	return (
		<div className="container mt-5">
			<h4>Login Formik</h4>
			<Formik
				initialValues={ initialCredentials }
				validationSchema={ loginSchema }
				onSubmit={ async ( values, actions ) => {

					await new Promise( ( response ) => setTimeout( response, 500 ) );
					authUser( values );
					actions.resetForm();

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

                        <div style={{ margin: '2rem 0' }}>
                            <b>Usuario valido: </b>
                            <code>
                                email: eve.holt@reqres.in & password: cityslicka
                            </code>
                        </div>

					</Form>
				)}

			</Formik>
		</div>
	);
};


export default LoginFormik;