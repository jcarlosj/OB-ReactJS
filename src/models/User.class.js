import { CONECTED } from "./Conected.enum";

export class User {
    nombre = '';
    apellido = '';
    email = '';
    conectado = CONECTED.no;

    constructor( nombre, apellido, email, conectado ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado ? CONECTED.yes : CONECTED.no;
    }
}