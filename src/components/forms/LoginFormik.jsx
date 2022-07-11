import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login, getAllUsers, getAllPagedUsers, getUserById } from '../../services/axios.services';

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

    const handleAllUsers = () => {
        getAllUsers()
            .then( response => {
                alert( 'Se han obtenido todos los usuarios' );
                console.log( response.data.data );
            })
            .catch( err => {
                console.log( `Something went wrong: ${ err }` );
            });
    }

    const handleAllPagedUsers = ( page ) => {
        getAllPagedUsers( page )
            .then( response => {
                alert( `Usuarios pagina ${ page }` );
                console.log( response.data.data );
            })
            .catch( err => {
                console.log( `Something went wrong: ${ err }` );
            });
    }

    const handleUserById = id => {
        getUserById( id ).then( response => {
            alert( `Usuario con ID ${ id }` );
            console.log( response.data.data );
        })
        .catch( err => {
            console.log( `Something went wrong: ${ err }` );
        });
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

					</Form>
				)}

			</Formik>
            <div style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                <b>Usuario valido: </b>
                <code>
                    email: eve.holt@reqres.in & password: cityslicka
                </code>
            </div>
            <div style={{ margin: '1rem 0' }}>
                <button
                    type="button"
                    onClick={ handleAllUsers }
                >Todos los usuarios</button>
                <button
                    type="button"
                    onClick={ () => handleUserById( 4 ) }
                >Usuario con ID 4</button>
            </div>
            <div style={{ margin: '1rem 0' }}>
                <button
                    type="button"
                    onClick={ () => handleAllPagedUsers( 1 ) }
                >1</button>
                <button
                    type="button"
                    onClick={ () => handleAllPagedUsers( 2 ) }
                >2</button>
                <button
                    type="button"
                    onClick={ () => handleAllPagedUsers( 3 ) }
                >3</button>
            </div>
		</div>
	);
};


export default LoginFormik;