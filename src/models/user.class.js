import { ROLES } from './roles.enum';

export class User {
	username = '';
	email = '';
	passwd = '';
	role = ROLES.USER;

	constructor( username, email, password, role ) {
		this.username = username;
		this.email = email;
		this.passwd = password;
		this.role = role;
	}
}
