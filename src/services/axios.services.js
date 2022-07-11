import { instance, reqresInstance } from '../config/axios.config.js';

// ! API - https://randomuser.me
export function getRandomUser() {

    // ? https://randomuser.me/api/
    return instance.get( '/', {
        validateStatus: function( status ) {
            return status < 500;        // ? Resolve only if the status code is less than 500 
        }
    });        
}

// ! API - https://reqres.in: Simulacion de Login
export function login( email, password ) {
    const body = {
        email, password
    }       
    
    // Return the response with a Promise
    return reqresInstance.post( '/login', body );
}

// ! API - https://reqres.in: Obtiene todos los usuarios
export function getAllUsers() {

    return reqresInstance.get( '/users' );
}

// ! API - https://reqres.in: Obtiene todos los usuarios con paginacion
export function getAllPagedUsers( page ) {

    return reqresInstance.get( `/users?page=${ page }` );
}

// ! API - https://reqres.in: Obtiene usuario por ID
export function getUserById( id ) {

    return reqresInstance.get( `/users/${ id }` );
}

// ! API - https://reqres.in: Simula la creacion de un usuario
export function createUser( name, job ) {
    const body = {
        name, job
    }       
    
    // Return the response with a Promise
    return reqresInstance.post( '/users', body );
}

// ! API - https://reqres.in: Simula la actualizacion de un usuario
export function updateUserById( id, name, job ) {
    const body = {
        name, job
    }       
    
    // Return the response with a Promise
    return reqresInstance.put( `/users/${ id }`, body );
}

// ! API - https://reqres.in: Simula eliminar un usuario por ID
export function deleteUserById( id ) {

    return reqresInstance.delete( `/users/${ id }` );
}