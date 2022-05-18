import { STATE } from './Conected.enum';

export class ContactModel {
    name = '';
    email = '';
    phoneNumber = '';
    state = STATE.CONECTED;

    constructor( name, email, phoneNumber, state = false ) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.state = state ? STATE.CONECTED : STATE.DISCONNECTED;
    }
}