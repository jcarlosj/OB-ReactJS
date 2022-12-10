export const fetchTask = async ( path, params ) => {
    const response = await fetch( `${ process.env.REACT_APP_API}${ path }`, params );

    // console.log( `${process.env.REACT_APP_API}${ path }` );
    // console.log( response );

    return response;
}