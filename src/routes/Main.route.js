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

const MainRoute = ({ userLogged, setUserLogged }) => {
    return (
        <div>
            <Menu userLogged={ userLogged } setUserLogged={ setUserLogged } />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login userLogged={ userLogged } setUserLogged={ setUserLogged } /> } />
                <Route path="/register" element={ <Register userLogged={ userLogged } /> } />
                <Route path="/admin" element={ <Admin userLogged={ userLogged } /> } />
                <Route path="/dashboard" element={ <Dashboard userLogged={ userLogged } /> } />
                <Route path="/profile" element={ <Profile userLogged={ userLogged } /> } />
                <Route path="/task-list" element={ <TaskList userLogged={ userLogged } /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </div>
    );
};


export default MainRoute;
