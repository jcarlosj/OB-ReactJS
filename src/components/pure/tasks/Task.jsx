import { Link } from 'react-router-dom';


// Functional Component
const Task = ({ id, name, description, completed, level }) => {
    return (
        <tr>
            <td>{ name }</td>
            <td>{ description }</td>
            <td>{ completed ? 'Completed' : 'Incompleted'}</td>
            <td>{ level }</td>
            <td className="actions">
                <span className="item">
                    <Link to="#" >
                        edit
                    </Link>
                </span>
                <span className="item">
                    <Link to="#" >
                        delete
                    </Link>
                </span>
            </td>
        </tr>
    );
}

export default Task;
