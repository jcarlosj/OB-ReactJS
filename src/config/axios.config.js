import axios from 'axios';

// ! Default config for axios
export const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    responseType: 'json',
    timeout: 5000,
});