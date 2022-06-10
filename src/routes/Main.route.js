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
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute userLogged={ userLogged }>
                            <Login setUserLogged={ setUserLogged } />
                        </RestrictedRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute userLogged={ userLogged }>
                            <Register />
                        </RestrictedRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute userLogged={ userLogged }>
                            <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute userLogged={ userLogged }>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute userLogged={ userLogged }>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/task-list"
                    element={
                        <ProtectedRoute userLogged={ userLogged }>
                            <TaskList />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </div>
    );
};


export default MainRoute;
