import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => {

	useEffect( () => {
		console.log( 'Task created!' );

		return () => {
			console.log( `Task component '${ task.name }' is going to unmount` );
		};
	}, [ task ] );

    return (
        <>
            <p>Name: { task.name }</p>
            <p>Description: { task.description }</p>
            <p>Level: { task.level }</p>
            <p>Task is { task.completed ? 'completed' : 'pending' }</p>
        </>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf( Task ).isRequired
};


export default TaskComponent;
