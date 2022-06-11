const getRegisteredUsers = async () => {
    const
        result = await localStorage.getItem( 'users' ),
        allUsers = await JSON.parse( result );

    return allUsers;
}

const registerUser = async ( newUser ) => {
    newUser.roles = [ 'user' ];         //  Agrega rol por defecto a todo usuario que desea registrarse
    
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

const loginUser = async ( userCredentials ) => {
    const registeredUsers = await getRegisteredUsers();

    // Valida si NO hay usuarios registrados... registra
    if( ! registeredUsers ) {

        return {
            authenticated: false,
            message: 'There are no registered users. Register now!'
        };
    }

    // Verifica si el usuario esta registrado con correo y contraseña validos
    const verifiedUser = registeredUsers.find( user => {
        return user.email === userCredentials.email && user.password === userCredentials.password;
    });

    // Valida si el usuario existe
    if( ! verifiedUser ) {
        return {
            authenticated: false,
            message: 'Invalid user credentials!'
        };
    }

    delete verifiedUser[ 'password' ];

    await localStorage.setItem( 'authenticated_user', JSON.stringify( verifiedUser ) );

    return {
        authenticated: true,
        message: 'Authenticated user',
        authenticated_user: verifiedUser
    };
}

const getAuthenticatedUser = async () => {
    const
        result = await localStorage.getItem( 'authenticated_user' ),
        authenticatedUser =  await JSON.parse( result );
    
    if( authenticatedUser ) {
        delete authenticatedUser[ 'password' ];
    }

    return authenticatedUser;
}

const logoutUser = async () => {
    const result = await localStorage.removeItem( 'authenticated_user' );
}

const registerUsersByDefault = async () => {
    const defaultUsers = [
        { name: 'Sofía', email: 'admin@correo.co', password: 'admin', roles: [ 'admin', 'editor', 'user' ] },
        { name: 'Juan', email: 'superadmin@correo.co', password: 'superadmin', roles: [ 'superadmin', 'editor', 'user' ] },
        { name: 'Milo', email: 'editor@correo.co', password: 'editor', roles: [ 'editor', 'user' ] }
    ];

    const registeredUsers = await getRegisteredUsers();

    if( ! registeredUsers ) {
        await localStorage.setItem( 'users', JSON.stringify( [ ...defaultUsers ] ) );
        return true;
    }

    const unRegisteredUsers = defaultUsers?.filter( user => ! registeredUsers?.map( user => user.email ).includes( user.email ) );

    if( ! unRegisteredUsers ) {
        return false;
    }

    await localStorage.setItem( 'users', JSON.stringify( [ ...unRegisteredUsers, ...registeredUsers ] ) );    
    console.log( 'unregisteredUsers:', unRegisteredUsers );

    return true;
}

export {
    registerUser,
    loginUser,
    getAuthenticatedUser,
    logoutUser,
    registerUsersByDefault
}