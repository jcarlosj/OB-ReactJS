import { useState, useEffect } from 'react';

import { getRandomUser } from '../services/axios.services.js';


const AxiosComponent = () => {
    const [ user, setUser ] = useState();

    useEffect(() => {
        getRandomUser()
            .then( response => {
                if( response.status === 200 ) {
                    console.log( response );
                    setUser( response.data.results[ 0 ] );
                }
                
            })
            .catch( err => {
                alert( 'Somethingent wrong' );
                console.log( err );
            });
    }, [] );

    return (
        <div>
            <h1>AxiosComponent <span>(Ejemplos)</span></h1>
            <p>Se recomienda ver siempre la consola</p>

            {   user && <>
                    <h3>User</h3>
                    <img src={ user.picture.large } alt={ `${ user.name.first } ${ user.name.last }` }/>
                    <p><strong>Name:</strong> { user.name.title } { user.name.first } { user.name.last }</p>
                    <p><strong>Gender:</strong> { user.gender }</p>
                    <p><strong>E-mail:</strong> { user.email }</p>
                    <p><strong>Phone:</strong> { user.phone }</p>
                    <p><strong>Location:</strong> { user.location.country }, { user.location.city }</p>
                </>
            }
        </div>
    );
};


export default AxiosComponent;
