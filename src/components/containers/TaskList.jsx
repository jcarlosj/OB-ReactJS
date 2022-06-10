import { Link, Navigate } from 'react-router-dom';


const TaskList = ({ userLogged }) => {
    if ( ! userLogged ) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="container">
            <h1 className="page_title page_register">
                Taks List Page
                <div className="title_note">
                    <small>(Static page)</small>
                </div>
            </h1>
            <p className="text-center">(Protected: authenticated user required)</p>
            <table className="table-task-list">
                <thead>
                    <tr>
                        <th>Name Task</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Learning Angular</td>
                        <td>Udemy (Fernando Herrera)</td>
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
                    <tr>
                        <td>Learning Flutter</td>
                        <td>Udemy (Fernando Herrera)</td>
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
                    <tr>
                        <td>Learning Node</td>
                        <td>Udemy (Juan Pablo de la Torre Valdez)</td>
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
                </tbody>
            </table>
        </div>
    );
};


export default TaskList;
