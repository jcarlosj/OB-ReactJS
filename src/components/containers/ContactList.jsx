import { CONECTED } from '../../models/Conected.enum';
import { User } from '../../models/User.class';

import ContactComponent from '../pure/Contact';

const ContactListComponent = () => {

    const defaultContact = new User( 'Juan C', 'Jimenez G', 'jcjimenez29@misena.edu.co', CONECTED.no );

    return (
        <>
            <h1>Listado de contactos</h1>
            {/* TODO: Aplicar For/Map para renderizar una lista de tareas */}
            <ContactComponent contacto={ defaultContact }></ContactComponent>
        </>
    );
};


export default ContactListComponent;
