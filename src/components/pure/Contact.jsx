import React from 'react';
import PropTypes from 'prop-types';

import { ContactModel } from '../../models/Contact.class';

import './Contact.scss';


const Contact = ({ contact, changeStatus, remove }) => {
    return (
        <a href="#/" className="list-group-item list-group-item-action">
            <i onClick={ () => changeStatus( contact ) } className={ `bi ${ contact.state ? 'bi-toggle-on' : 'bi-toggle-off' }` }></i> 
            <span>
                { contact.name }
                { ( contact.email || contact.phoneNumber ) && <small>
                    { contact.email && `Email: ${ contact.email.toLowerCase() }` } 
                    { contact.email && contact.phoneNumber && `, ` }
                    { contact.phoneNumber && `Phone: ${ contact.phoneNumber }`}
                </small> }
            </span>
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
