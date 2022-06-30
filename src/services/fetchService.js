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