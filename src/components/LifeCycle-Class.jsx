import React, { Component } from 'react';

class LifecycleClass extends Component {
    // Se usa para inicializar el component
    constructor( props ) {
        super( props );
        console.log( 'Instanciado' );
    }

    // Métodos que controlan el ciclo de vida del Componente
    componentWillMount() {
        console.log( 'componentWillMount: Antes de ser montado' );
    }

    // Antes de renderizado (se deben implementar peticiones aqui)
    componentDidMount() {
        console.log( 'componentDidMount: Después de ser montado' );
    }

    componentWillReceiveProps( nextProps ) {
        console.log( 'componentWillReceiveProps: Si va a recibir nuevas props' );
    }

    // Hace las veces de useEffect en los componentes funcionales
    shouldComponentUpdate( nextProps, nextState ) {
        console.log( 'shouldComponentUpdate: Retorna true/false esto controla si el componente debe o no actualizarse' );

        // return false / true;
    }

    componentWillUpdate( nextProps, nextState ) {
        console.log( 'componentWillUpdate: Antes de actualizarse' );
    }

    componentDidUpdate( nextProps, nextState ) {
        console.log( 'componentDidUpdate: Después de actualizarse' );
    }

    componentWillUnmount() {
        console.log( 'componentWillUnmount: Antes de desaparecer el componente del DOM')
    }

    render() {
        return (
            <>
                <h1>Ciclo de vida componente de clase</h1>
                <p>Ver consola del navegador</p>
            </>
        );
    }
}

export default LifecycleClass;
