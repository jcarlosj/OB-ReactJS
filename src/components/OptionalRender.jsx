import { useState } from 'react';


const OptionalRender = () => {

    const [ access, setAccess ] = useState( true );

    const updateAccess = () => {
        setAccess( ! access );
    }

    /** Elementos a renderizar de forma condicional */
    let opButton;

    if( access )
        opButton = <button onClick={ updateAccess }>Logout</button>;
    else
        opButton = <button onClick={ updateAccess }>Login</button>;

    return (
        <>
            { opButton }
        </>
    );
};


export default OptionalRender;
