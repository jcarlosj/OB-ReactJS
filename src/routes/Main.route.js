import { Routes, Route } from 'react-router-dom';

import Menu from '../components/pure/Menu';
import Home from '../components/Home';
import Login from '../components/pure/forms/Login.jsx';
import Register from '../components/pure/forms/Register';
import TaskList from '../components/containers/TaskList';
import NotFoundPage from '../components/pure/NotFoundPage';

const MainRoute = () => {
    const linkList = [
        { text: 'Login', path: '/login' },
        { text: 'Register', path: '/register' },
        { text: 'Task list', path: '/task-list' }
    ];

    return (
        <div>
            <Menu list={ linkList } />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/task-list" element={ <TaskList /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </div>
    );
};


export default MainRoute;
