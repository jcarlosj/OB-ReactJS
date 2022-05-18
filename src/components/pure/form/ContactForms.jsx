import { useRef } from 'react';
import PropTypes from 'prop-types';

import { STATE } from '../../../models/Conected.enum';
import { ContactModel } from '../../../models/Contact.class';


const ContactForms = ({ add }) => {

    const
        nameRef = useRef( '' ),
        emailRef = useRef( '' ),
        phoneNumberRef = useRef( '' );

    const handleAddContact = event => {
        event.preventDefault();

        const newContact = new ContactModel(
            nameRef.current.value, 
            emailRef.current.value,
            phoneNumberRef.current.value,
            STATE.CONECTED
        );

        add( newContact );
        
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneNumberRef.current.value = '';
    }

    return (
        <form
            className="row justify-content-center"
            onSubmit={ handleAddContact }
        >
            <div className="col-auto">
                <label htmlFor="inputName">Name</label>
                <input ref={ nameRef } type="text" className="form-control" id="inputName" placeholder="Lina Marcela" />
            </div>
            <div className="col-auto">
                <label htmlFor="inputPhone">Phone</label>
                <input ref={ phoneNumberRef } type="text" className="form-control" id="inputPhone" placeholder="331.988231" />
            </div>
            <div className="col-auto">
                <label htmlFor="inputEmail">Email</label>
                <input ref={ emailRef } type="email" className="form-control" id="inputEmail" placeholder="linam@email.co" />
            </div>
            <div className="col-auto">
                <br />
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    );
};


ContactForms.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForms;
