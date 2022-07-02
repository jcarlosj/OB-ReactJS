import { useEffect, useState, useRef } from "react"
import { instance } from '../config/axios.config.js';


const useFetch = ( uri ) => {
    const isEffectRun = useRef( false );       // ! Define un objeto mutable (Para controlar la doble ejecucion del efecto cuando React esta en modo Estricto)

    const [ joke, setJoke ] = useState( null );
    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const [ counter, setCounter ] = useState( 0 );

    // ? React 18 en StrictMode: Una gran actualizacion de esta version es 'Concurrent React' o renderizado simultáneo concurrente
    // ?                         simulará desmontar y volver a montar el componente el efecto se lanzará dos veces.
    // ?        Más información en: https://es.reactjs.org/blog/2022/03/29/react-v18.html seccion 'New Strict Mode Behaviors'
    useEffect( () => {

        // ! Verifica que el efecto no se ha lanzado
        if( ! isEffectRun.current ) {
            getData();                      // ! La consulta al API se hace una sola vez
            console.log( 'isEffectRun #1', isEffectRun );
        }
        else {
            console.log( 'isEffectRun #2', isEffectRun );
        } 

        return () => {
            console.log( 'Simulate unmount hook useFetch !' );

            // ! Verifica que el efecto no se ha lanzado
            if( ! isEffectRun ) {
                console.log( 'Simulate unmount hook useFetch !' );    // ! Nunca se ejecuta por que isEffect para este momento siempre sera 'true'
            }
            else {
                console.log( 'Unmount hook useFetch!' );
                isEffectRun.current = true;                           // ! Cambia el estado del inmutable que controla consulta del API una sola ves ante la duplicidad de la ejecucion del hoook useEffect sobre el Hook u Componente
            }
            
        }
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