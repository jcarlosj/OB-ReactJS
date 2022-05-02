import React from 'react';

import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/Task';


const TaskListComponent = () => {

    const defaultTask = new Task( 'Example', 'Default description', false, LEVELS.NORMAL );

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
