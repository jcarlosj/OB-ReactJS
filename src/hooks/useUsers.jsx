import { useState, useEffect, useRef } from 'react';

import { User } from '../models/user.class';


const useUsers = () => {
	const isEffectRun = useRef( false );

	const [ data, setData ] = useState( null );


	const getUsers = () => {
		const
			string = localStorage.getItem( 'registered_users' ),
			registered = JSON.parse( string );

		if( registered ) {
			const allUsers = registered.map( record => new User( record.username, record.email, record.passwd, record.role ) );

			return allUsers;
		}

		return null;
	}

	useEffect( () => {

		if( isEffectRun.current ) {
			setData( getUsers() );
		}

		return () => {
			isEffectRun.current = true;
		};
	}, [] );

	return data != null ? data : [];
}


export default useUsers;
