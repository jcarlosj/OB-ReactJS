import { useState, useEffect } from 'react';

import { STATE } from '../../models/Conected.enum';
import { ContactModel } from '../../models/Contact.class';
import Contact from '../pure/Contact';
import ContactForm from '../pure/form/ContactForms';


const Contacts = () => {

    const 
        [ loading, setLoading ] = useState( true ),
        [ contacts, setContacts ] = useState([
            new ContactModel( 'Luisa', 'luisa@mail.co', '888-889132', STATE.CONECTED ),
            new ContactModel( 'Juliana', 'juliana@mail.co', '212-342667502', STATE.DISCONNECTED ),
            new ContactModel( 'Elisa', 'elisa@mail.co', '888-324525', STATE.CONECTED ),
        ]);

    useEffect(() => {
        console.log( 'Contact state has been modified!' );
        setLoading( false );

        return () => {
            console.log( 'Contacts component is going to be unmount!' );
        };
    }, [ contacts ] );

    const changeContactStatus = ( task ) => {
        console.log( 'Complete this task:', task );

        const
            index = contacts.indexOf( task ),
            tempContacts = [ ...contacts ];

        tempContacts[ index ].state = ! tempContacts[ index ].state;
        setContacts( tempContacts );
    }

    const addContact = ( contact ) => {
        console.log( 'Add this contact:', contact );

        setContacts([
            ...contacts,
            contact
        ]);
    }

    const deleteContact = ( contact ) => {
        console.log( 'Delete this contact:', contact );

        const
            index = contacts.indexOf( contact ),
            tempContacts = [ ...contacts ];

        tempContacts.splice( index, 1 );
        setContacts( tempContacts );
    }

    return (
        <div className="container">
            <h3 className="mt-4 mb-4">Registre un contacto</h3>
            <ContactForm
                add={ addContact }
            ></ContactForm>
            <h3 className="mt-4 mb-4">Lista de contactos</h3>
            <div className="list-group">
                
                {   contacts.map( ( contact, index ) => (
                        <Contact
                            key={ index }
                            contact={ contact }
                            changeStatus={ changeContactStatus }
                            remove={ deleteContact }
                        ></Contact>
                ))}
                
            </div>
        </div>
    );
};


export default Contacts;
