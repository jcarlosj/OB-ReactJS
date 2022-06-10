import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ userLogged, redirectPath='/', children }) => {
    if ( ! userLogged ) {
        return <Navigate to={ redirectPath } replace />;
    }

    return children;
};

export default ProtectedRoute;