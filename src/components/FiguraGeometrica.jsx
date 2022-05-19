import { useEffect } from 'react';
import { useState } from 'react';
import './FiguraGeometrica.css';

const FiguraGeometrica = () => {

    const 
        MIN = 0,
        MAX = 256;

    const 
        [ data, setData ] = useState({
            isGenerating: false,
            intervalID: 0,
            rgbColor: {
                red: 0,
                green: 0,
                blue: 0
            }
        }),
        { isGenerating, rgbColor: { red, green, blue }, intervalID } = data;

    /** Genera # aleatorio en rango establecido (máximo excluyente) */
    const randomNumber = ( min, max ) => Math.floor( Math.random() * ( max - min ) ) + min;

    useEffect( () => {

        if( isGenerating ) {

            const iID = setInterval( () => {

                setData({
                    ...data,
                    intervalID: iID,
                    rgbColor: {
                        red: randomNumber( MIN, MAX ),
                        green: randomNumber( MIN, MAX ),
                        blue: randomNumber( MIN, MAX )
                    }
                }); 

            }, 1000 );

        }
        else {
            clearInterval( intervalID );
        }

        return () => {
            console.log( 'Actions before unmounting the component' );
        };
    }, [ isGenerating ]);

    const handleOnMouseEnter = () => {
        console.log( 'Entra y genera colores de fondo' );

        setData({
            ...data,
            isGenerating: true
        });
    }

    const handleOnMouseLeave = () => {
        console.log( 'Sale y detiene generacion de colores de fondo' );

        setData({
            ...data,
            isGenerating: false
        });
    }

    const handleOnDoubleClick = () => {
        console.log( 'Doble click, detiene generacion de colores de fondo' );

        setData({
            ...data,
            isGenerating: false
        });
    }

    /** Constante de estilo */
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
                onMouseEnter={ handleOnMouseEnter }
                onMouseLeave={ handleOnMouseLeave }
                onDoubleClick={ handleOnDoubleClick }
            >&nbsp;</div>
        </div>
    );
}

export default FiguraGeometrica;
