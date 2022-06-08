import { Routes, Route } from 'react-router-dom';

import Menu from '../components/pure/Menu';
import Home from '../components/Home';
import Login from '../components/pure/forms/Login.jsx';
import Register from '../components/pure/forms/Register';
import Admin from '../components/containers/Admin';
import Dashboard from '../components/containers/Dashboard';
import Profile from '../components/containers/Profile';
import TaskList from '../components/containers/TaskList';
import NotFoundPage from '../components/pure/NotFoundPage';

const MainRoute = () => {
    const linkList = [
        { text: 'Login', path: '/login' },
        { text: 'Register', path: '/register' },
        { text: 'Admin', path: '/admin' },
        { text: 'Dashboard', path: '/dashboard' },
        { text: 'Profile', path: '/profile' },
        { text: 'Task list', path: '/task-list' }
    ];

    return (
        <div>
            <Menu list={ linkList } />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/admin" element={ <Admin /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/profile" element={ <Profile /> } />
                <Route path="/task-list" element={ <TaskList /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </div>
    );
};


export default MainRoute;
