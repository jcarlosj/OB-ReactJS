import { useState, useEffect } from 'react';

import { useForm } from '../../../../hooks/useForm';
import { LEVELS } from '../../../../models/levels.enum.js'
import { isRequired } from '../../../../helpers/validate.js';


// Functional Component
const FormTask = () => {
    const
        [ loading, setLoading ] = useState( true ),
        [ message, setMessage ] = useState( '' ),
        [ levels, setLevels ] = useState([]),
        [ formValues, handleInputChange, setError, reset ] = useForm({
            name: '',
            description: '',
            completed: false,
            level: '',
            errorMessages: []
        }),
        { name, description, completed, level, errorMessages } = formValues;


    useEffect( () => {
        setLevels( Object.values( LEVELS ) );
        // console.log( errorMessages );

        setLoading( false );
    }, [ loading ]);

    const isFormValid = () => {
        
        setError({});           //  Inicializa campos de error cada que se valida el formulario
        // setLoading( true );

        /** Validaciones: Agregara mensajes de error de ser necesario */
        const
            nameValid = isRequired({ nameField: 'name', valueField: name, errorMessage: 'Name is required!' }, setError ),
            descriptionValid = isRequired({ nameField: 'description', valueField: description, errorMessage: 'Description is required!' }, setError );
            
        if( formValues.level === '' )
            formValues.level = LEVELS.NORMAL;

        return nameValid && descriptionValid;
    }

    const handleOnSubmit = async ( event ) => {
        event.preventDefault();

        if( isFormValid() ) {
            console.log( formValues );

            reset();
        }
    }

    return (
        <div className="container">
            <h1 className="page_title page_register">Form Task</h1>
            <p className="text-center">(Restricted: unauthenticated is required)</p>
            <form
                onSubmit={ handleOnSubmit }
            >
                {
                    errorMessages &&
                        <code className="alert alert-error">
                            { JSON.stringify( errorMessages ) }
                        </code>
                }
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="auth__input"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        className="auth__input"
                        autoComplete="off"
                        value={ description }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-control">
                    <select
                        className="select"
                        onChange={ handleInputChange }
                        name="level"
                        value={ level }
                    >
                        {   Object.keys( LEVELS ).length === 0 &&
                                <option>-- Vacio --</option>
                        }
                        {   Object.keys( LEVELS ).length > 0 &&
                                <>
                                    <option value="">-- Seleccione --</option>
                                    {   Object.values( LEVELS )?.map( ( value, index ) => (
                                            <option key={ index } value={ value }>
                                                { value }
                                            </option>
                                        ))
                                    }
                                </>
                                
                        }
                    </select>
                </div>
                <div className="form-control">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mtb-3"
                        // disabled={ loading }
                    >
                        Add Task
                    </button>
                </div>
                {
                    message &&
                        <code className="alert alert-success">
                            { message }
                        </code>
                }
            </form>
        </div>
    );
};


export default FormTask;
