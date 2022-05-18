import React from 'react';
import PropTypes from 'prop-types';

import { ContactModel } from '../../models/Contact.class';


const Contact = ({ contact, changeStatus, remove }) => {
    return (
        <a href="#/" className="list-group-item list-group-item-action">
            <i onClick={ () => changeStatus( contact ) } className={ `bi ${ contact.state ? 'bi-toggle-on' : 'bi-toggle-off' }` }></i> 
            { contact.name }
            <i onClick={ () => remove( contact ) } className="bi bi-trash"></i>
        </a>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf( ContactModel ).isRequired,
    changeStatus: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default Contact;
