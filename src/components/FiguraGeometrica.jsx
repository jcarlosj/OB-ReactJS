import { useState } from 'react';
import './FiguraGeometrica.css';

const FiguraGeometrica = () => {

    const 
        [ bgcolor, setBGColor ] = useState({
            red: 0,
            green: 0,
            blue: 0
        }),
        { red, green, blue } = bgcolor;

    const bgFigura = {
        backgroundColor: `rgb( ${ red }, ${ green }, ${ blue } )`,
        height: '255px',
        width: '255px'
    }

    const randomNumber = ( min, max ) => Math.floor( Math.random() * ( max - min ) ) + min;

    console.log( randomNumber( 0, 256 ) );

    return (
        <div className="container">
            <div
                className="figura"
                style={ bgFigura }
                onMouseEnter={ () => console.log( 'Entra' ) }
                onMouseLeave={ () => console.log( 'Sale' ) }
                onDoubleClick={ () => console.log( 'Doble click')}
            >&nbsp;</div>
        </div>
    );
}

export default FiguraGeometrica;
