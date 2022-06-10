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

import ProtectedRoute from '../routes/ProtectedRoute';
import RestrictedRoute from '../routes/RestrictedRoute';

const MainRoute = ({ userLogged, setUserLogged }) => {
    return (
        <div>
            <Menu userLogged={ userLogged } setUserLogged={ setUserLogged } />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route element={ <RestrictedRoute userLogged={ userLogged } /> }>
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/login" element={ <Login setUserLogged={ setUserLogged }/> } />
                </Route>
                <Route element={ <ProtectedRoute userLogged={ userLogged } /> } >
                    <Route path="/admin" element={ <Admin /> } />
                    <Route path="/dashboard" element={ <Dashboard /> } />
                    <Route path="/profile" element={ <Profile /> } />
                    <Route path="/task-list" element={ <TaskList /> } />
                </Route>
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </div>
    );
};


export default MainRoute;
