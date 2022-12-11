import { useState, useEffect } from 'react';

import { useForm } from '../../../../hooks/useForm';
import { LEVELS } from '../../../../models/levels.enum.js'
import { isRequired } from '../../../../helpers/validate.js';
import { fetchTask } from '../../../../services/fetchTask';

import { useTaskContext } from '../../../../store/task/provider.js';
import { taskTypes } from '../../../../store/task/types.js';


// Functional Component
const FormTask = () => {

    const
        [ state, dispatch ] = useTaskContext();

    const
        [ loading, setLoading ] = useState( true ),
        [ message, setMessage ] = useState( '' ),
        [ levels, setLevels ] = useState([]),
        [ formValues, handleInputChange, setError, reset ] = useForm({
            name: '',
            description: '',
            completed: false,
            level: '',
            errorMessages: [],
        }),
        { name, description, completed, level, errorMessages } = formValues;


    useEffect( () => {
        setLevels( Object.values( LEVELS ) );
        // console.log( errorMessages );

        setLoading( false );
    }, [ loading ]);

    const isFormValid = () => {
        setError({});           //  Inicializa campos de error cada que se valida el formulario

        const isDataValid = [
            isRequired({ input: { name }, errorMessage: 'Name is required!' }, setError ),
            isRequired({ input: { description }, errorMessage: 'Description is required!' }, setError )
        ];

        // Establece por defecto el nivel como 'normal' cuando no ha sido seleccionado
        if( formValues.level === '' )
            formValues.level = LEVELS.NORMAL;       // TODO: Buscar una mejor forma de establecer valor por defecto para el selector

        const isFormValid = isDataValid.every( ( value ) => value )
        if( isFormValid ) {
            setError({});
        }

        return isFormValid;
    }

    const handleOnSubmit = async ( event ) => {
        event.preventDefault();

        if( isFormValid() ) {
            // console.log( formValues );
            delete formValues.errorMessages;

            dispatch({
                type: taskTypes.ADD_TASK_PENDING
            });

            const
                response = await fetchTask( 'tasks', {
                    method: 'POST',
                    body: JSON.stringify( formValues ),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });

            // console.log( response );

            if( response.status > 400 ) {
                dispatch({
                    type: taskTypes.ADD_TASK_REJECTED,
                    payload: response.statusText
                });
    
                return;
            }
            
            dispatch({
                type: taskTypes.ADD_TASK_FULFILLED,
                payload: formValues
            });

            reset();
        }
    }

    return (
        <div className="form-task">
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
                <div className="form-fields">

                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="form-field"
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
                            className="form-field"
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="form-control">
                        <select
                            className="form-field"
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
