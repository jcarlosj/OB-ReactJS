// Functional Component
const Task = ({ id, name, description, completed, level, handleDeleteTask, handleEditTask }) => {
    return (
        <tr>
            <td>{ name }</td>
            <td>{ description }</td>
            <td>{ completed ? 'Completed' : 'Incompleted'}</td>
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

export default Task;
