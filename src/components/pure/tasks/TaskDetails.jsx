// Functional Component
const TaskDetails = ( props ) => {

    const 
        { id, name, description, completed, level, handleDeleteTask, handleEditTask, handleCompletedTask } = props,
        task = {
            id, name, description, completed, level
        };


    return (
        <tr>
            <td>{ name }</td>
            <td>{ description }</td>
            <td>
                <span className="item">
                    <span
                        className="btn"
                        onClick={ () => handleCompletedTask( task ) }
                    >
                        { completed ? 'Completed' : 'Incompleted'}
                    </span>
                </span>
            </td>
            <td>{ level }</td>
            <td className="actions">
                <span className="item">
                    <span
                        className="btn"
                        onClick={ () => handleEditTask( id ) }
                    >
                        edit
                    </span>
                </span>
                <span className="item">
                    <span
                        className="btn"
                        onClick={ () => handleDeleteTask( id ) }
                    >
                        delete
                    </span>
                </span>
            </td>
        </tr>
    );
}

export default TaskDetails;
