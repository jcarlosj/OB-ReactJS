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

    return (
        <div className="container">
            <div
                className="figura"
                style={ bgFigura }
            >&nbsp;</div>
        </div>
    );
}

export default FiguraGeometrica;
