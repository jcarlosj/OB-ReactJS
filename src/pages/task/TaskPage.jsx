import TaskListComponent from '../../components/containers/TaskList';

const TaskPage = ({ data, setData }) => {
    return (
        <div className="container mt-5">
            <TaskListComponent data={ data } setData={ setData }></TaskListComponent>
        </div>
    );
}

export default TaskPage;
