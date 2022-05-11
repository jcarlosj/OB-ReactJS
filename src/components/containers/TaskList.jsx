import { useState, useEffect } from 'react';

import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/Task';


const TaskListComponent = () => {

    const defaultTask = new Task( 'Example', 'Default description', false, LEVELS.NORMAL );

	const
		[ tasks, setTasks ] = useState( defaultTask ),
		[ loading, setLoading ] = useState( true );

	useEffect( () => {
		console.log( 'Task state has been modified' );
		setLoading( false );

		return () => {
			console.log( `TaskList component is going to unmount` );
		};
	}, [ tasks ]);

	const changeCompleted = () => {
		console.log( 'TODO: Cambiar estado completado de una tarea' );
	}

    return (
        <div className="col-12">
			<div class="card">
				<div className="card-header p-3">
					<h5 class="card-title">Your tasks</h5>
				</div>
				<div class="card-body" data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px' } }>
					<table>
						<thead>
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Description</th>
								<th scope="col">Priority</th>
								<th scope="col">Title</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* TODO: Aplicar For/Map para renderizar una lista de tareas */}
							<TaskComponent task={ defaultTask }></TaskComponent>
						</tbody>
					</table>

				</div>
			</div>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
