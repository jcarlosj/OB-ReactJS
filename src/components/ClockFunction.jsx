import { useState, useEffect } from 'react';

const FC_Clock = () => {

    const 
        initialState = {
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        };

    const 
        [ timerID, setTimerID ] = useState( 0 ),
        [ data, setData ] = useState( initialState ),
        { fecha, edad, nombre, apellidos } = data;

    useEffect( () => {
        setTimerID( setInterval (
            () => tick(), 1000
        ));
        
        return () => {
            clearInterval( timerID );
        }
    }, [ timerID ] );    

    const tick = () => {
        setData( prevState => {
            let edad = prevState.edad + 1;

            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }

    return (
        <div>
            <h2>
                Hora Actual:
                { fecha.toLocaleTimeString() }
            </h2>
            <h3>{ nombre } { apellidos }</h3>
            <h1>Edad: { edad }</h1>
        </div>
    );
}


export default FC_Clock;