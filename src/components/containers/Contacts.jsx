import { useState, useEffect } from 'react';

import { STATE } from '../../models/State.class';


const Contacts = () => {

    const 
        [ loading, setLoading ] = useState( true ),
        [ contacts, setContacts ] = useState([
            { name: 'Luisa', email: 'luisa@mail.co', state: STATE.CONECTED },
            { name: 'Juliana', email: 'Juliana@mail.co', state: STATE.DISCONNECTED },
            { name: 'Elisa', email: 'elisa@mail.co', state: STATE.CONECTED }
        ]);

    useEffect(() => {
        console.log( 'Contact state has been modified!' );
        setLoading( false );

        return () => {
            console.log( 'Contacts component is going to be unmount!' );
        };
    }, [ contacts ] );

    const stateContact = ( task ) => {
        console.log( 'Complete this task:', task );

        const
            index = contacts.indexOf( task ),
            tempContacts = [ ...contacts ];

        tempContacts[ index ].state = ! tempContacts[ index ].state;
        setContacts( tempContacts );
    }

    return (
        <div className="list-group">
            
            {   contacts.map( ( contact, index ) => (
                    <a href="#/" key={ index } className="list-group-item list-group-item-action">
                        <i onClick={ () => stateContact( contact ) } className={ `bi ${ contact.state ? 'bi-toggle-on' : 'bi-toggle-off' }` }></i> 
                        { contact.name }
                        
                    </a>
            ))}
            
        </div>
    );
};


export default Contacts;
