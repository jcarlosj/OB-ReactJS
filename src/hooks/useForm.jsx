import { useState } from 'react';

/** Hook Personalizado */
export const useForm = ( initialState = { errors: [] } ) => {
    
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

        if( Object.keys( error ).length === 0 ) {
            setValues( preState => ({
                ...preState,
                errors: []
            }));

            return;
        }
        
        setValues( preState => ({
            ...preState,
            errors: [ ...preState.errors, error ]
        }));
    }

    const emailIsValid = ( email ) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
    }

    return [ values, handleInputChange, setError, reset, emailIsValid ];
}