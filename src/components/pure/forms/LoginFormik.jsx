import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

	const initialCredentials = {
		email: '',
		passwd: ''
	}

	return (
		<>
			<h4>Login Formik</h4>
			<Formik
				initialValues={ initialCredentials }
				validationSchema={ loginSchema }
				onSubmit={ async ( values ) => {
					await new Promise( ( response ) => setTimeout( response, 2000 ) );
					alert( JSON.stringify( values, null, 4 ) );
					localStorage.setItem( 'credentials', values )
				} }
			>

				{/** We obtein props from Formik */}
				{
					props => {
						const {
							values,			/** Valores del formulario */
							touched,    	/** Campos que han sido tocados */
							errors,      	/** Errores del formulario */
							isSubmitting,	/** Indica si se estan enviando datos del formulario */
							handleChange,   /** Cuando hay un cambio en un campo */
							handleBlur, 	/** Cuando hay un cambio de foco */
							handleSubmit, 	/** Cuando enviamos datos del formulario */
						} = props;

						return (
							<Form>
								<label htmlFor="email">Email</label>
								<Field
									id="email"
									type="email"
									name="email"
									placeholder="example@email.co"
								/>
								{	errors.email && touched.email && <div className="error">
										<p>{ errors.email }</p>
									</div>
								}

								<label htmlFor="email">Password</label>
								<Field
									id="password"
									type="password"
									name="passwd"
									placeholder="Password"
								/>
								{	errors.passwd && touched.passwd && <div className="error">
										<p>{ errors.passwd }</p>
									</div>
								}

								<button type="submit">Login</button>
								{	isSubmitting ? <p>Login you credentials</p> : null }

							</Form>
						)
					}
				}

			</Formik>
		</>
	);
};


export default LoginFormik;
