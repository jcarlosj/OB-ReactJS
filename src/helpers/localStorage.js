// RTK: LocalStorage
const AUTH_KEY = 'auth_user';

const saveLocalStorage = ( key, value ) => {
    localStorage.setItem( key, JSON.stringify( value ) );
}

const removeLocalStorage = ( key ) => {
    localStorage.removeItem( key );
}

const getLocalStorage = ( key ) => {
    return JSON.parse( localStorage.getItem( key ) );
}

export {
    AUTH_KEY,
    saveLocalStorage,
    removeLocalStorage,
    getLocalStorage
}