import { STATE } from './Conected.enum';

export class ContactModel {
    name = '';
    email = '';
    numberPhone = '';
    state = STATE.CONECTED;

    constructor( name, email, numberPhone, state = false ) {
        this.name = name;
        this.email = email;
        this.numberPhone = numberPhone;
        this.state = state ? STATE.CONECTED : STATE.DISCONNECTED;
    }
}