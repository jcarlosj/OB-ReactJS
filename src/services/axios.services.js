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

// ! API - https://reqres.in
export function login( email, password ) {
    const body = {
        email, password
    }       
    
    // Return the response with a Promise
    return reqresInstance.post( '/login', body );
}
