import { useRef } from 'react';
import PropTypes from 'prop-types';

import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TasksForm = ({ add, numberOfTasks }) => {

	const
		nameRef = useRef( '' ),
		descriptionRef = useRef( '' ),
		levelRef = useRef( LEVELS.NORMAL );

	console.log( '')

	function addTask( event ) {
		event.preventDefault();

		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		);

		add( newTask );
	}

	return (
		<div className="container mt-5">
			<form
				className='d-flex justify-content-center align-items-center mb-4'
				onSubmit={ addTask }
			>
				<div className='form-outline flex-fill'>
					<input
						className='form-control form-control-lg'
						id='inputName'
						type='text'
						placeholder='Task name'
						required
						autoFocus
						ref={ nameRef }
					/>
					<input
						className='form-control form-control-lg'
						id='inputDescription'
						type='text'
						placeholder='Task description'
						required
						ref={ descriptionRef }
					/>
					<select
						className="form-select form-select-lg"
						id='selectLevel'
						ref={ levelRef }
						defaultValue={ LEVELS.NORMAL }
					>
						<option value={ LEVELS.NORMAL }>Normal</option>
						<option value={ LEVELS.BLOCKING }>Blocking</option>
						<option value={ LEVELS.URGENT }>Urgent</option>
					</select>
					<button
						type="submit"
						className="btn btn-success btn-lg ms-2"
					>{ numberOfTasks > 0 ? 'Add new task' : 'Create your first task' }</button>
				</div>
			</form>
		</div>
	);
};


TasksForm.propTypes = {
	add: PropTypes.func.isRequired,
	numberOfTasks: PropTypes.number.isRequired
};


export default TasksForm;
