import { useEffect, useState } from 'react';

import { getAllUsers, getAllPagedUsers, getUserById } from '../services/fetchService.js';


const FetchComponent = () => {

    const
        [ users, setUsers ] = useState( [] ),
        [ totalUsers, setTotalUsers ] = useState( 12 ),
        [ usersPerPage, setUsersPerPage ] = useState( 6 ),
        [ pages, setPages ] = useState( 2 ),
        [ selectedUser, setSelectedUser ] = useState();

    useEffect(() => {
        getUsersAPI();
    }, [] );

    const getUsersAPI = () => {
        getAllUsers()
            .then( response => {
                const { data, total, total_pages, per_page } = response;

                console.log( response );

                setUsers( data );
                setTotalUsers( total );
                setUsersPerPage( per_page );
                setPages( total_pages );
            })
            .catch( err => {
                alert( `Error while retreiving users ${ err }` );
            })
            .finally( () => {
                console.log( `Ended obtaining users` );
                console.table( users );
            });
    }

    const getPagedUsersAPI = ( page ) => {
        getAllPagedUsers( page )
            .then( response => {
                const { data, total, total_pages, per_page } = response;

                console.log( response );

                setUsers( data );
                setTotalUsers( total );
                setUsersPerPage( per_page );
                setPages( total_pages );
            })
            .catch( err => {
                alert( `Error while retreiving user ${ err }` );
            })
            .finally( () => {
                console.log( `Ended obtaining user` );
                console.table( users );
            });
    }

    const getUserDetails = ( id ) => {
        getUserById( id )
            .then( response => {
                const { data } = response;

                console.log( response );

                setSelectedUser( data );
            })
            .catch( err => {
                alert( `Error while retreiving user ${ err }` );
            })
            .finally( () => {
                console.log( `Ended obtaining user` );
                console.table( selectedUser );
            });
    }

    return (
        <div>
            <h1>FetchComponent <span>(Ejemplos)</span></h1>
            <p>Se recomienda ver siempre la consola</p>

            <h3>Users</h3>
            {   users.map( ( user, index ) => (
                    <p
                        key={ index }
                        onClick={ () => getUserDetails( user.id ) }
                        style={{ cursor: 'pointer' }}
                    >{ user.first_name } { user.last_name }</p>
                )) 
            }
            <p>Showing { usersPerPage } users of { totalUsers } in total</p>
            <button
                onClick={ () => getPagedUsersAPI( 1 ) }
            >
                1
            </button>
            <button
                onClick={ () => getPagedUsersAPI( 2 ) }
            >
                2
            </button>

            {   selectedUser && <>
                    <h3>User details</h3>
                    <div>
                        <img src={ selectedUser.avatar } alt={ selectedUser.first_name } width={{ height: '50px' }}/>
                        <p>First name: { selectedUser.first_name }</p>
                        <p>Last name: { selectedUser.last_name }</p>
                        <p>Email: { selectedUser.email }</p>
                    </div>
                </>
            }
        </div>
    );
};


export default FetchComponent;
