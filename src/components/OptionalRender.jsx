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

    const
        [ access, setAccess ] = useState( true ),
        [ totalMessages, setTotalMessages ] = useState( 0 );

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

    let addMessage = () => {
        setTotalMessages( prev => {
            return totalMessages + 1
        });
    }

    // ? (expression true) && expresion => Se renderiza la expresion
    // ? (expression false) && expresion => No se renderiza la expresion

    return (
        <>
            { opButton }
            { access && totalMessages > 0 && totalMessages === 1 && <p>You have { totalMessages } new message</p> }
            { access && totalMessages > 1 && <p>You have { totalMessages } new messages</p> }
            { access && totalMessages === 0 && <p>There are no new messages</p> } 
            { access && <button onClick={ addMessage }>Add new message</button>}
        </>
    );
};


export default OptionalRender;
