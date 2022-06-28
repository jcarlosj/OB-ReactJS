import { useEffect, useState } from 'react';

import { getAllUsers } from '../services/fetchService.js';


const FetchComponent = () => {

    const [ users, setUsers ] = useState( [] );

    useEffect(() => {
        getUsersAPI();
    }, [] );

    const getUsersAPI = () => {
        getAllUsers()
            .then( response => {
                console.log( response.data );
                setUsers( response.data );
            })
            .catch( err => {
                alert( `Error while retreiving users ${ err }` );
            })
            .finally( () => {
                console.log( `Ended obtaining users` );
                console.table( users );
            });
    }

    return (
        <div>
            <h1>FetchComponent <span>(Ejemplos)</span></h1>
            <p>Se recomienda ver siempre la consola</p>

            <h3>Users</h3>
            {   users.map( ( user, index ) => (
                    <p key={ index }>{ user.first_name } { user.last_name }</p>
                )) 
            }
        </div>
    );
};


export default FetchComponent;
