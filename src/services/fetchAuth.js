
export const fetchLogin = async ( email, password ) => {
    const
        response = await fetch( 'http://localhost:4000/users', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }),
        data = await response.json();
    
    console.log( data );

    return data;
}


export const fetchRegister = async ( name, email, password ) => {
    const
        response = await fetch( 'http://localhost:4000/users', {
            method: 'POST',
            body: JSON.stringify({
                id: new Date().valueOf(),
                name,
                email,
                password,
                roles: [
                    'editor',
                    'user'
                ]
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }),
        data = response.json();


    console.log( response );

    return data;
}