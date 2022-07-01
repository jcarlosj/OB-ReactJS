import { useEffect, useState } from "react"
import { instance } from '../config/axios.config.js';


const useFetch = ( uri ) => {

    const [ joke, setJoke ] = useState( null );
    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const [ counter, setCounter ] = useState( 0 );

    useEffect( () => {
        getData();
    }, [] );

    const getData = async () => {

        setLoading( true );

        instance.get( uri )
            .then( response => {
                console.log( response );

                setCounter( counter => counter + 1 )
                setJoke( response.data.value );
            })
            .catch( err => {
                console.log( err );
                setError( 'An error has occurred' );
            })
            .finally( () => {
                setLoading( false );
            });

    }

    return { joke, error, loading, counter, getData }
}

export default useFetch;