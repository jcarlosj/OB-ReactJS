import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ userLogged, children }) => {
    if ( userLogged ) {
        return <Navigate to="/task-list" replace />;
    }

    return children;
};

export default RestrictedRoute;