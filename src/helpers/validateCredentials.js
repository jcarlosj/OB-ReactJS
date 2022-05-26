const isAuthenticated = ( registered, credentials ) => {
	return registered?.some( item => item?.email == credentials?.email && item?.passwd == credentials?.passwd );
}

export { isAuthenticated };
