import { useEffect } from 'react';

import { useTaskContext } from '../../../store/task/provider.js';
import { taskTypes } from '../../../store/task/types.js';

import { fetchTask } from '../../../services/fetchTask.js';

import TaskDetails from './TaskDetails.jsx';
import FormTask from './forms/FormTask.jsx';
import Select from './Select.jsx';


// Functional Component
const TaskList = () => {

    const selectOptions = [
        [ 'all', 'All' ],
        [ 'completed', 'Completed' ],
        [ 'uncompleted', 'Uncompleted' ]
    ];

    const
        [ state, dispatch ] = useTaskContext(),
        { loading, data, error } = state;


    // console.log( state );

    useEffect( () => {

        const fetchData = async () => {
            dispatch({
                type: taskTypes.GET_TASKS_PENDING
            });
    
            const 
                response = await fetchTask( 'tasks', {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }),
                data = await response.json();
    
            console.log( response );
            console.log( data );
    
            if( response.status > 400 ) {
                dispatch({
                    type: taskTypes.GET_TASKS_REJECTED,
                    payload: response.statusText
                });
    
                return;
            }
            
            dispatch({
                type: taskTypes.GET_TASKS_FULFILLED,
                payload: data
            });
    
        }

        fetchData();
    }, [ dispatch ] );

    const handleEditTask = ( task_id ) => {
        console.log( 'EditTask', task_id );
    }

    const handleDeleteTask = async ( task_id ) => {
        console.log( 'DeleteTask', task_id );

        dispatch({
            type: taskTypes.DELETE_TASK_PENDING
        });

        const response = await fetchTask( `tasks/${ task_id }`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        console.log( response );
        
        if( response.status > 400 ) {
            dispatch({
                type: taskTypes.DELETE_TASK_REJECTED,
                payload: response.statusText
            });

            return;
        }

        dispatch({
            type: taskTypes.DELETE_TASK_FULFILLED,
            payload: task_id
        });
    }

    const handleCompletedTask = async ( task ) => {
        console.log( 'CompletedTask', task );

        dispatch({
            type: taskTypes.COMPLETE_TASK_PENDING
        });

        // * 1. Obtener la tarea a actualizar
        let response = await fetchTask( `tasks/${ task.id }`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            taskFound = await response.json();

        console.log( response );
        console.log( taskFound );

        if( response.status > 400 ) {
            dispatch({
                type: taskTypes.COMPLETE_TASK_REJECTED,
                payload: response.statusText
            });

            return;
        }

        // * 2. Actualizar estado de la tarea
        taskFound.completed = ! taskFound.completed;
        console.log( taskFound );

        response = await fetchTask( `tasks/${ task.id }`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: taskFound.completed,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        
        const taskUpdated = await response.json();

        console.log( response );
        console.log( taskUpdated );

        if( response.status > 400 ) {
            dispatch({
                type: taskTypes.COMPLETE_TASK_REJECTED,
                payload: response.statusText
            });

            return;
        }

        dispatch({
            type: taskTypes.COMPLETE_TASK_FULFILLED,
            payload: taskFound
        });
    }

    const handleSelectChange = ( value ) => {
        console.log( `> ${ value }` );
    }


    return (
        <div className="container">
            <h1 className="page_title page_register">
                Task List Page
                <div className="title_note">
                    <small>(Dinamic page)</small>
                </div>
            </h1>
            <p className="text-center">(Protected: authenticated user required)</p>
            <FormTask />
            {   loading && <p className="loading">Loading...</p> }
            {   error !== '' && <p className="error">{ error }</p> }
            {   ! loading && data.length === 0
                    ?   <p className="message">There are no registered tasks</p>
                    :   <>  
                            <div className="filter">
                                <Select
                                    values={ selectOptions }
                                    selectedValue="all"
                                    onValueChange={ value => handleSelectChange( value ) }
                                    className="filter-state"
                                />
                            </div>
                            <table className="table-task-list">
                            <thead>
                                <tr>
                                    <th>Name Task</th>
                                    <th>Details</th>
                                    <th>State</th>
                                    <th>Level</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   data.map( task => 
                                        <TaskDetails
                                            key={ task.id } { ...task }
                                            handleEditTask = { handleEditTask }
                                            handleDeleteTask={ handleDeleteTask } 
                                            handleCompletedTask={ handleCompletedTask }
                                        /> 
                                    )
                                }
                            </tbody>
                        </table>
                        </>
            }
        </div>
    );
};


export default TaskList;
