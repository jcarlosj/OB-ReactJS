import { Component, useEffect } from 'react';

// Ejemplos de implementacion del ciclo de vida previo a renderizacion de un Componente (Clase/Funcional)

// Ejemplo: Componente de clase
export class DidMount extends Component {

    // Todo proceso asincrono previo se hace sobre el componente DidMount
    componentDidMount() {
        console.log( 'componentDidMount: Antes que se renderice el componente' );
    }

    render() {
        return (
            <>
                <h1>Componente de clase (componentDidMount)</h1>
            </>
        )
    }
}

// Ejemplo: Componente funcional
export const DidMountHook = () => {

    // Todo proceso asincrono previo se hace sobre el useEffect cuando el componente se renderice una sola vez
    useEffect( () => {
        console.log( 'useEffect: Antes que se renderice el componente' );
    }, [] );    // []: Solo una vez

    return (
        <>
            <h1>Componente funcional (useEffect Hook)</h1>
        </>
    )
}