import React from 'react';
import PropTypes from 'prop-types';

import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => {
    return (
        <>
            <p>Name: { task.name }</p>
            <p>Description: { task.description }</p>
            <p>Level: { task.level }</p>
            <p>Task is { task.completed ? 'completed' : 'pending' }</p>
        </>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf( Task ).isRequired
};


export default TaskComponent;
