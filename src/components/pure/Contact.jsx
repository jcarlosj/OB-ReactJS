import React from 'react';
import PropTypes from 'prop-types';

import { ContactModel } from '../../models/Contact.class';


const Contact = ({ contact, changeStatus }) => {
    return (
        <a href="#/" className="list-group-item list-group-item-action">
            <i onClick={ () => changeStatus( contact ) } className={ `bi ${ contact.state ? 'bi-toggle-on' : 'bi-toggle-off' }` }></i> 
            { contact.name }
            
        </a>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf( ContactModel ).isRequired,
    changeStatus: PropTypes.func.isRequired
};


export default Contact;
