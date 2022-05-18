import { useState } from 'react';


const Contacts = () => {

    const [ contacts, setContacts ] = useState([
        { name: 'Luisa', email: 'luisa@mail.co', state: true },
        { name: 'Juliana', email: 'Juliana@mail.co', state: false },
        { name: 'Elisa', email: 'elisa@mail.co', state: true }
    ]);

    return (
        <div class="list-group">
            
            {   contacts.map( ( contact, index ) => (
                    <a href="#" class="list-group-item list-group-item-action">
                        { contact.name }
                    </a>
            ))}
            
        </div>
    );
};


export default Contacts;
