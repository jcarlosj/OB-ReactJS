import { useEffect } from 'react';

const Allcycles = () => {

    console.log( 'Se monta el componente' );                        // Fase 1: Se monta y actualiza el componente

    useEffect( () => {
        // console.log( 'Componente Creado / Actualizado' );        

        const interval = setInterval( () => {
            console.log( `Actualización del Componente` );          // Fase 2: Se actualiza el componente
            document.title = `${ new Date() }`;
        }, 1000 );

        return () => {
            console.log( 'El componente va a desaparecer' );        // Fase 3: Se elimina el componente
            document.title = `Tiempo detenido`;
            clearInterval( interval );
        }

    }, [] );

    return (
        <>
            <h1>All Cycles</h1>
            <p>componentDidMount, componentDidUpdate, componentWillUnmount</p>
        </>
    );
}

export default Allcycles;
