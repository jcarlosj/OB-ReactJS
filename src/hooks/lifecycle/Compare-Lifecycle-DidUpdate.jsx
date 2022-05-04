import { Component, useEffect } from 'react';

// Ejemplos de implementacion del ciclo de vida previo a renderizacion de un Componente (Clase/Funcional)

// Ejemplo: Componente de clase
export class DidUpdate extends Component {

    // Comportamiento cuando el componente recibe nuevos props o cambia su estado privado
    componentDidUpdate() {
        console.log( 'componentDidUpdate: Antes que se actualice el componente' );
    }
    
    render() {
        return (
            <>
                <h1>Componente de clase (componentDidUpdate)</h1>
            </>
        )
    }
}

// Ejemplo: Componente funcional
export const DidUpdateHook = () => {

    // El comportamiento lo gestiona useEffect cuando el componente recibe nuevos props o cambia su estado privado
    useEffect( () => {
        console.log( 'useEffect: Antes que se actualice el componente' );
    });    // : Todas las veces

    return (
        <>
            <h1>Componente funcional (useEffect Hook)</h1>
        </>
    )
}