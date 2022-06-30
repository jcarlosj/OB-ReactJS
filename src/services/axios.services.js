import { instance } from '../config/axios.config.js';

export function getRandomUser() {

    // ? https://randomuser.me/api/
    return instance.get( '/', {
        validateStatus: function( status ) {
            return status < 500;        // ? Resolve only if the status code is less than 500 
        }
    });        
}