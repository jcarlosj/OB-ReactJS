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
        <tr className="fw-normal">
			<th>
				<span className="ms-2">{ task.name }</span>
			</th>
			<th className="align-middle">
				<span>{ task.description }</span>
			</th>
			<th className="align-middle">
			{/** TODO: Sustituir por badge */}
				<span>{ task.level }</span>
			</th>
			<th className="align-middle">
				{/** TODO: Sustituir por iconos */}
				<span>{ task.completed ? 'completed' : 'pending' }</span>
			</th>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf( Task ).isRequired
};


export default TaskComponent;
