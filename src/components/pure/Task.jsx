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
			<td className="align-middle">
				<span>{ task.description }</span>
			</td>
			<td className="align-middle">
			{/** TODO: Sustituir por badge */}
				<span>{ task.level }</span>
			</td>
			<td className="align-middle">
				{/** TODO: Sustituir por iconos */}
				{ task.completed
					?	<i className="bi-toggle-on" style={ { color: 'green' } }></i>
					:	<i className="bi-toggle-off" style={ { color: 'gray' } }></i>
				}
			</td>
			<td>
				<i className="bi-trash" style={ { color: 'tomato' } }></i>

			</td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf( Task ).isRequired
};


export default TaskComponent;
