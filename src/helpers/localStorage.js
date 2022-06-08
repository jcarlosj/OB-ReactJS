const getRegisteredUsers = async () => {
    const
        result = await localStorage.getItem( 'users' ),
        allUsers = await JSON.parse( result );

    return allUsers;
}

const registerUser = async ( newUser ) => {
    const registeredUsers = await getRegisteredUsers();

    // Valida si NO hay usuarios registrados... registra
    if( ! registeredUsers ) {
        await localStorage.setItem( 'users', JSON.stringify( [ newUser ] ) );

        return 'Successful registration!';
    }    

    // Valida si el usuario NO esta registrado, busca si existe
    const foundUser = registeredUsers.find( user => {
        return user.email === newUser.email;
    });

    // Valida si el usuario existe
    if( foundUser ) {
        return 'User already registered!';
    }

    // Registra
    await localStorage.setItem( 'users', JSON.stringify( [ ...registeredUsers, newUser ] ) );

    return 'Successful registration!';
}

module.exports = {
    registerUser
}