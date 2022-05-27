import { User } from '../models/user.class'

/** LocalStorage: Operaciones para almacenar usuarios registrados */
const setRegisteredUserData = ( data ) => {
	localStorage.setItem( 'registered_users', JSON.stringify( data ) )
}

const getRegisteredUserData = async () => {
	const
		string = await localStorage.getItem( 'registered_users' ),
		registered = await JSON.parse( string );

	if( registered ) {
		const allUsers = await registered.map( record => {

			return new User( record.username, record.email, record.passwd, record.role );
		})

		return allUsers;
	}

	return [];
}

/** LocalStorage: Operaciones para almacenar credenciales de un usuario autenticado */
const getUserCredentialData = async () => {
	const
		string = await localStorage.getItem( 'authenticated_user' ),
		authenticated_user = await JSON.parse( string );

	// console.log( authenticated_user );

	if( authenticated_user )
		return new User(
			authenticated_user.username,
			authenticated_user.email,
			authenticated_user.passwd,
			authenticated_user.role
		);

	return null;
};

const deleteUserCredentialData = async () => {
	await localStorage.removeItem( 'authenticated_user' );
}

const setUserCredentialData = async ( user ) => {
	await localStorage.setItem( 'authenticated_user', JSON.stringify( user ) );
}

/** Validaciones: Obtiene usuario cuando email y contraseña son conhincidentes */
const getAuthenticatedUser = ( registered, credentials ) => {

	// console.log( registered );
	// console.log( credentials );

	const authenticated_user = registered?.find( item => item?.email === credentials?.email && item?.passwd === credentials?.passwd );

	return authenticated_user;
}

export {
	getUserCredentialData,
	getRegisteredUserData,
	deleteUserCredentialData,
	setUserCredentialData,
	setRegisteredUserData,
	getAuthenticatedUser
};
