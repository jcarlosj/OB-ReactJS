import { STATE } from './conected.enum';

export class Contact {
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