import { useState, useEffect } from 'react';

import { Task } from '../../models/task.class';
import TaskComponent from '../pure/Task';
import TaskFormik from '../pure/forms/TaskFormik';



import './TaskList.scss';


const TaskListComponent = ({ data, setData }) => {

	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		// console.log( 'Task state has been modified' );
		console.log( 'data', data );

		setTimeout( () => {
			setLoading( false );
		}, 1000 );

		return () => {
			// console.log( `TaskList component is going to unmount` );
		};
	}, [ loading, setLoading ] );

	function completeTask( task ) {
		console.log( 'Complete this task:', task );

		const
			index = data.tasks.indexOf( task ),
			tempTask = [ ...data.tasks ];

		tempTask[ index ].completed = ! tempTask[ index ].completed;
		setData({
			...data,
			tasks: tempTask
		});
	}

	function deleteTask( task ) {
		console.log( 'Delete this task:', task );

		const
			index = data.tasks.indexOf( task ),
			tempTask = [ ...data.tasks ];

		tempTask.splice( index, 1 );
		setData({
			...data,
			tasks: tempTask
		});
	}

	function addTask( task ) {
		const newTask = new Task( task.name, task.description, task.complete, task.level );
		console.log( 'Add this task:', task );

		setData({
			...data,
			tasks: [ ...data.tasks, newTask ]
		});
		setLoading( true );

	}

	/** Component Table */
	const Table = () => {
		return (
			<div className="container mt-5">
				<table>
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Description</th>
							<th scope="col">Priority</th>
							<th scope="col">State</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>

						{ data.tasks.map( ( task, index ) => (
							<TaskComponent
								key={ index }
								task={ task }
								complete={ completeTask }
								remove={ deleteTask }
								add={ addTask }
							>
							</TaskComponent>
						))}

					</tbody>
				</table>
			</div>
		)
	}

	let showInView;

	if( data?.tasks?.length > 0 )
		showInView = <Table></Table>;
	else
		showInView = <>
				<h4>There are no task to show</h4>
				<p>Please, create one</p>
			</>

    return (
        <div className="col-12">
			<div className="card">
				<div className="card-header p-3">
					<h5 className="card-title">Your tasks</h5>
				</div>
				<div className="card-body" data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px' } }>
					{/** TODO: Add loading spinner */}
					{ loading ? <p>Loading...</p> : showInView }
				</div>
			</div>
			<TaskFormik
				add={ addTask }
				numberOfTasks={ data?.tasks?.length }
			></TaskFormik>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
