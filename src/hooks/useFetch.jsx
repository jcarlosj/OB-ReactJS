import { useEffect, useState } from "react"
import { instance } from '../config/axios.config.js';


const useFetch = ( uri ) => {

    const [ joke, setJoke ] = useState( null );
    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( false );

    useEffect( () => {
        getData();
    }, [] );

    const getData = async () => {
        try{
            setLoading( true )
            const response = await instance.get( uri, {
                validateStatus: function( status ) {
                    return status < 500;        // ? Resolve only if the status code is less than 500 
                }
            });

            // console.log( response );
            setJoke( response.data.value );
        }
        catch( err ) {
            setError( err );
        }
        finally{
            setLoading( false );
        }
    }

    return { joke, error, loading, getData }
}

export default useFetch;