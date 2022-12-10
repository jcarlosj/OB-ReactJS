import { useState } from 'react';

/** Hook Personalizado */
export const useForm = ( initialState = { errorMessages: [] } ) => {
    
    const [ values, setValues ] = useState( initialState );

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    const setError = ( error ) => {

        /** Si el objeto tiene propiedades */
        if( Object.keys( error ).length === 0 ) {
            setValues( preState => ({
                ...preState,
                errorMessages: []
            }));

            return;
        }

        setValues( preState => ({
            ...preState,
            errorMessages: [ ...preState?.errorMessages, error ],
        }));
    }

    return [ values, handleInputChange, setError, reset, setValues ];
}