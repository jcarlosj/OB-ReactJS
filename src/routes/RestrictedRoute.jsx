import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ userLogged, redirectPath='/task-list', children }) => {
    if ( userLogged ) {
        return <Navigate to={ redirectPath } replace />;
    }

    return children;
};

export default RestrictedRoute;