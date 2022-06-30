export const getAllUsers = async () => {
    let response = await fetch( 'https://reqres.in/api/users' );

    console.log( response );

    return await response.json();
}

export const getAllPagedUsers = async ( page ) => {
    let response = await fetch( `https://reqres.in/api/users?page=${ page }` );

    console.log( response );

    return await response.json();
}

export const getUserById = async ( id ) => {
    let response = await fetch( `https://reqres.in/api/users/${ id }` );

    console.log( response );

    return await response.json();
}

// ! Simular un login
export const login = async ( email, password ) => {
    let body = {
        email,
        password
    }

    console.log( body );

    const response = await fetch( 'https://reqres.in/api/login', {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'omit',
        cache: 'no-cache',
        headers: { 'Content-type': 'application/json' },
        body
    });

    console.log( response );

    return await response.json();
}