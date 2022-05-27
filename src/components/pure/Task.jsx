import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

import './Task.scss';


const TaskComponent = ({ task, complete, remove }) => {
	/**
	 * Function that return a Badge depending on the level of the task
	 */
	function taskLevelBadge() {
		switch ( task.level ) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0">
						<span className="badge bg-primary">{ task.level }</span>
					</h6>
				);
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0">
						<span className="badge bg-warning">{ task.level }</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0">
						<span className="badge bg-danger">{ task.level }</span>
					</h6>
				);
			default:
				break;
		}
	}

	/**
	 * Function that returns icon depending on completion of the task
	*/
	function taskCompletedIcon() {
		if( task.completed )
			return 	<i
						onClick={ () => complete( task ) }
						className="bi-toggle-on task-action"
						style={ { color: 'green' } }>
					</i>

		return	<i
					onClick={ () => complete( task ) }
					className="bi-toggle-off task-action"
					style={ { color: 'gray' } }>
				</i>

	}

    return (
        <tr
			className={ `fw-normal ${ task.completed ? 'task-completed' : 'task-pending' }` }
		>
			<th>
				<Link to={ `/tasks/${ task.id }` }>
					<span className="ms-2">{ task.name }</span>
				</Link>
			</th>
			<td className="align-middle">
				{ taskLevelBadge() }
			</td>
			<td className="align-middle">
				{ taskCompletedIcon() }
			</td>
			<td>
				<i
					className="bi-trash task-action"
					style={ { color: 'tomato' } }
					onClick={ () => remove( task ) }
				></i>

			</td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf( Task ).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired
};


export default TaskComponent;
