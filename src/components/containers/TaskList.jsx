import { useState, useEffect } from 'react';

import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/Task';
import TaskForm from '../pure/forms/TasksForm';


const TaskListComponent = () => {

    const
		defaultTask1 = new Task( 'Example 1', 'Default description', false, LEVELS.NORMAL ),
		defaultTask2 = new Task( 'Example 2', 'Default description', false, LEVELS.URGENT ),
		defaultTask3 = new Task( 'Example 3', 'Default description', false, LEVELS.BLOCKING );

	const
		[ tasks, setTasks ] = useState([ defaultTask1, defaultTask2, defaultTask3 ]),
		[ loading, setLoading ] = useState( true );

	useEffect( () => {
		console.log( 'Task state has been modified' );
		setLoading( false );

		return () => {
			console.log( `TaskList component is going to unmount` );
		};
	}, [ tasks ]);

	function completeTask( task ) {
		console.log( 'Complete this task:', task );

		const
			index = tasks.indexOf( task ),
			tempTask = [ ...tasks ];

		tempTask[ index ].completed = ! tempTask[ index ].completed;
		setTasks( tempTask );
	}

    return (
        <div className="col-12">
			<div className="card">
				<div className="card-header p-3">
					<h5 className="card-title">Your tasks</h5>
				</div>
				<div className="card-body" data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px' } }>
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

							{ tasks.map( ( task, index ) => (
								<TaskComponent
									key={ index }
									task={ task }
									complete={ completeTask }
								>
								</TaskComponent>
							))}

						</tbody>
					</table>

				</div>
				<TaskForm></TaskForm>
			</div>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
