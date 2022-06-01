import TaskListComponent from '../../components/containers/TaskList';
import Footer from '../../components/ui/Footer';

const TaskPage = ({ data, setData }) => {
    return (
        <div className="container mt-5">
            <TaskListComponent data={ data } setData={ setData }></TaskListComponent>
			<Footer />
        </div>
    );
}

export default TaskPage;
