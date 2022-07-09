import { useState, useEffect, useRef } from 'react';


const useAuth = () => {
	const isEffectRun = useRef( false );

	const [ data, setData ] = useState( null );

	useEffect( () => {
		if( isEffectRun.current ) {
			const
				userString = localStorage.getItem( 'authenticated_user' ),
				user = JSON.parse( userString );

			setData( user );
		}

		return () => {
			isEffectRun.current = true;
		};
	}, [] );

	return data ? data : {};
}


export default useAuth;
