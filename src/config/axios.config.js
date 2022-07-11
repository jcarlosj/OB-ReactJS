import axios from 'axios';

// ! Default config for axios
export const instance = axios.create({
    baseURL: 'https://randomuser.me/api',
    responseType: 'json',
    timeout: 5000,
});

const reqresInstance = axios.create({
  baseURL: 'https://reqres.in/api',
  responseType: 'json',
  timeout: 3000,
});

export {
  reqresInstance
}