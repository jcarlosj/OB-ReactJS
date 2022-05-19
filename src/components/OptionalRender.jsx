import { useState } from 'react';

/** Login Component */
const LoginButton = ({ loginAction }) => {
    return (
        <button onClick={ loginAction }>Login</button>
    );
}

/** Logout Component */
const LogoutButton = ({ logoutAction }) => {
    return (
        <button onClick={ logoutAction }>Logout</button>
    );
}

const OptionalRender = () => {

    const [ access, setAccess ] = useState( true );

    const loginAction = () => {
        console.log( 'Realiza peticion para hacer login' );
        setAccess( true );
    }

    const logoutAction = () => {
        console.log( 'Realiza peticion para hacer logout' );
        setAccess( false );
    }

    let opButton;

    if( access )
        opButton = <LogoutButton logoutAction={ logoutAction }  />
    else
        opButton = <LoginButton loginAction={ loginAction } />

    return (
        <>
            { opButton }
        </>
    );
};


export default OptionalRender;
