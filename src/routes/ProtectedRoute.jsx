import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ userLogged, redirectPath='/' }) => {
    if ( ! userLogged ) {
        return <Navigate to={ redirectPath } replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;

// ! NOTA:
// ! <Outlet> se usa en elementos de ruta principales para representar sus elementos de ruta secundarios. 
// ! Esto permite que la interfaz de usuario anidada se muestre cuando se representan las rutas secundarias. 
// ! Si la ruta principal coincide exactamente, generará una ruta de índice secundaria o nada si no hay una ruta de índice.