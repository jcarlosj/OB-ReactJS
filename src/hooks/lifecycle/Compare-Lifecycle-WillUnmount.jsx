import { Component, useEffect } from 'react';

// Ejemplos de implementacion del ciclo de vida previo a renderizacion de un Componente (Clase/Funcional)

// Ejemplo: Componente de clase
export class WillUnmount extends Component {

    // Comportamiento del componente antes de desaparecer
    componentWillUnmount() {
        console.log( 'componentWillUnmount: Antes que se elimine el componente' );
    }

    render() {
        return (
            <>
                <h1>Componente de clase (componentWillUnmount)</h1>
            </>
        )
    }
}

// Ejemplo: Componente funcional
export const WillUnmountHook = () => {

    // Comportamiento del componente antes de desaparecer
    useEffect( () => {
        /** No ponemos nada */
        return () => {
            console.log( 'useEffect: Antes que se elimine el componente' );
        }
    }, [] );    // []: Solo una vez

    return (
        <>
            <h1>Componente funcional (useEffect Hook)</h1>
        </>
    )
}