import { useEffect } from 'react';

import { useTaskContext } from '../../../store/task/provider.js';
import { taskTypes } from '../../../store/task/types.js';

import useFetch, { REQUEST_STATUS } from '../../../hooks/useFetch.jsx';
import Task from './Task.jsx';


// Functional Component
const TaskList = () => {

    const [ state, dispatch ] = useTaskContext();

    const
        fetchedData = useFetch( 'http://localhost:4000/tasks' ),
        { data, status, error } = fetchedData;

    // console.log( fetchedData );
    // console.log( state );


    useEffect( () => {
        // De acuerdo al estado de la peticion agrega data obtenida del API (data, error, mensaje), al ContextAPI
        if( status === REQUEST_STATUS.FETCHING ) {
            dispatch({
                type: taskTypes.TASK_PENDING
            });
            // console.log( 'Pending...' );
        }

        if( status === REQUEST_STATUS.NOT_FOUND || status === REQUEST_STATUS.ERROR ) {
            dispatch({
                type: taskTypes.TASK_REJECTED,
                payload: error
            });
            // console.log( 'Rejected: ', error );
        }
        
        if( status === REQUEST_STATUS.SUCCESS ) {
            dispatch({
                type: taskTypes.TASK_FULFILLED,
                payload: data
            });
            // console.log( 'Success!' );
        }

    }, [ fetchedData ] );


    return (
        <div className="container">
            <h1 className="page_title page_register">
                Task List Page
                <div className="title_note">
                    <small>(Dinamic page)</small>
                </div>
            </h1>
            <p className="text-center">(Protected: authenticated user required)</p>
            {   ( status === REQUEST_STATUS.FETCHING ) && <p className="loading">Loading...</p> }
            {   ( status === REQUEST_STATUS.NOT_FOUND || status === REQUEST_STATUS.ERROR ) && <p className="error">{ error }</p> }
            {   ( status === REQUEST_STATUS.SUCCESS ) && 
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
                                    <Task key={ task.id } { ...task } /> 
                                )
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};


export default TaskList;
