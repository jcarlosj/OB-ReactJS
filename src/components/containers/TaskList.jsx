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
			console.log( `TaskList component is going to unmount` )
		};
	}, [ tasks ]);

	const changeCompleted = () => {
		console.log( 'TODO: Cambiar estado completado de una tarea' );
	}

    return (
        <>
            <h2>Task Default</h2>
            {/* TODO: Aplicar For/Map para renderizar una lista de tareas */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
