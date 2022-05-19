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
            {   access 
                    ?   totalMessages
                            ?   <p>You have { totalMessages } new message{ totalMessages > 1 ? 's' : '' }</p>
                            :   <p>There are no new messages</p>
                    :   null
            }

            { access && <button onClick={ addMessage }>{ totalMessages === 0 ? 'Add your first message' : 'Add new message' }</button>}
        </>
    );
};


export default OptionalRender;
