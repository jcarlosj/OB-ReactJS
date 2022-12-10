import { useEffect } from 'react';

import { useTaskContext } from '../../../store/task/provider.js';
import { taskTypes } from '../../../store/task/types.js';

import { fetchTask } from '../../../services/fetchTask.js';
import Task from './Task.jsx';


// Functional Component
const TaskList = () => {

    const
        [ state, dispatch ] = useTaskContext(),
        { loading, data, error } = state;


    // console.log( state );

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

    useEffect( () => {
        fetchData();
    }, [] );

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

    return (
        <div className="container">
            <h1 className="page_title page_register">
                Task List Page
                <div className="title_note">
                    <small>(Dinamic page)</small>
                </div>
            </h1>
            <p className="text-center">(Protected: authenticated user required)</p>
            {   loading && <p className="loading">Loading...</p> }
            {   error !== '' && <p className="error">{ error }</p> }
            {   data.length === 0
                    ?   <p className="message">There are no registered tasks</p>
                    :   <table className="table-task-list">
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
                                        <Task
                                            key={ task.id } { ...task }
                                            handleEditTask = { handleEditTask }
                                            handleDeleteTask={ handleDeleteTask } 
                                        /> 
                                    )
                                }
                            </tbody>
                        </table>
            }
        </div>
    );
};


export default TaskList;
