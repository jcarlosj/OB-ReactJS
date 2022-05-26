const getRegistered = async () => {
	const
		string = await localStorage.getItem( 'registered_users' ),
		registered = await JSON.parse( string );

	return registered ? registered : [];
}

const getCredentials = async () => {
	const
		string = await localStorage.getItem( 'authenticated_user' ),
		authenticated_user = await JSON.parse( string );

	return authenticated_user ? authenticated_user : null;
};

const removeCredentials = async () => {
	await localStorage.removeItem( 'authenticated_user' );
}

const setCredentials = async ( user ) => {
	await localStorage.setItem( 'authenticated_user', JSON.stringify( user ) );
}

export {
	getCredentials,
	getRegistered,
	removeCredentials,
	setCredentials
};
