
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