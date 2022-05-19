import { useState } from 'react';

/** Constantes como hojas de estilo */
const loggedStyle = {
    backgroundColor: 'green',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '6px 14px'
}
const unloggedStyle = {
    backgroundColor: 'tomato',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    padding: '6px 14px'
}


/** Login Component */
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={ propStyle } onClick={ loginAction }>Login</button>
    );
}

/** Logout Component */
const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={ propStyle } onClick={ logoutAction }>Logout</button>
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
        opButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={ logoutAction }  />
    else
        opButton = <LoginButton propStyle={ loggedStyle } loginAction={ loginAction } />

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
