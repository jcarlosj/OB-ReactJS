import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

/** Define esquema de analisis para validacion de valores */
const taskSchema = Yup.object().shape({
	taskname: Yup.string()
				.min( 3, 'Task name too short' )
				.required( 'Task name is required!' ),
	description: Yup.string()
				.min( 6, 'Task description too short' )
				.required( 'Task description is required!' ),
	level: Yup.string()
			.oneOf([
				LEVELS.NORMAL,
				LEVELS.BLOCKING,
				LEVELS.URGENT
			], 'You must select a level normal/blocking/urgent' )
			.required( 'You must select a priority!' )
});


/** Functional Component */
const TasksFormik = ({ add, numberOfTasks }) => {

	const initialValues = {
		taskname: '',
		description: '',
		level: ''
	}

	console.log( '' );

	function addTask( values ) {

		console.log( values );

		const newTask = new Task(
			values.taskname,
			values.description,
			false,
			values.level
		);

		add( newTask );
	}

	return (
		<>
			<Formik
				className='d-flex justify-content-center align-items-center mb-4'
				initialValues = { initialValues }
				validationSchema={ taskSchema }
				onSubmit={ async ( values, actions ) => {
					await new Promise( ( response ) => setTimeout( response, 2000 ) );
					alert( JSON.stringify( values, null, 4 ) );
					addTask( values );
					// localStorage.setItem( 'credentials', values );
					// actions.setSubmitting( false );
				} }
			>

				{/** We obtain props from Formik */}
				{ ( { errors, touched, isSubmitting } ) => (
					<Form
						className='form-outline flex-fill'
					>
						<label htmlFor="taskname">Task name</label>
						<Field
							id="taskname"
							className='form-control form-control-lg'
							type="text"
							name="taskname"
							placeholder="Ej: Learn Angular"
							required
							autoFocus
						/>
						<ErrorMessage name="taskname" render={ msg => <p><small>{ msg }</small></p>} />

						<label htmlFor="description">Description</label>
						<Field
							id="description"
							className='form-control form-control-lg'
							type="text"
							name="description"
							placeholder="Ej: Framework JavaScript Description"
							required
						/>
						<ErrorMessage name="description" render={ msg => <p><small>{ msg }</small></p>} />

						<label htmlFor="level">Level</label>
						<Field as="select"
							id="level"
							className="form-select form-select-lg"
							name="level"
						>
							<option value="">Seleccione...</option>
							<option value={ LEVELS.NORMAL }>Normal</option>
							<option value={ LEVELS.BLOCKING }>Blocking</option>
							<option value={ LEVELS.URGENT }>Urgent</option>
						</Field>
						<ErrorMessage name="level" render={ msg => <p><small>{ msg }</small></p>} />

						<button
							type="submit"
							className="btn btn-success btn-lg ms-2"
						>
							{ numberOfTasks > 0 ? 'Add new task' : 'Create your first task' }
						</button>
						{	isSubmitting ? <p>Sending your task</p> : null }

					</Form>
				)}

			</Formik>
		</>
	);
};


TasksFormik.propTypes = {
	add: PropTypes.func.isRequired,
	numberOfTasks: PropTypes.number.isRequired
};


export default TasksFormik;
