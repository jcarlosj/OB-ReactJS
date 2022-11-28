import { TaskProvider } from '../../store/task/provider.js';

import TaskList from '../pure/tasks/TaskList.jsx';


// Functional Component
const TaskPage = () => {
    

    return (
        <TaskProvider>
            <TaskList />
        </TaskProvider>
    );
}

export default TaskPage;
