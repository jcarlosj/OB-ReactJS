import PropTypes from 'prop-types';

import { User } from '../../models/User.class';


const ContactComponent = ({ contacto }) => {

    const { nombre, apellido, email, conectado } = contacto;

    return (
        <>
            <h3>Contacto</h3>
            <p>Nombre: { nombre }</p>
            <p>Apellido: { apellido }</p>
            <p>Email: { email }</p>
            <p>Contacto: { conectado ? 'En linea' : 'No disponible' }</p>
        </>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf( User ).isRequired
};


export default ContactComponent;
