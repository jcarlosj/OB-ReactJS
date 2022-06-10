import { Navigate, Outlet } from 'react-router-dom';

const RestrictedRoute = ({ isAllowed, redirectPath='/task-list', children }) => {
    if ( isAllowed ) {
        return <Navigate to={ redirectPath } replace />;
    }

    return children ? children : <Outlet />;        //  ! Ahora este componente de abstraccion funciona como componente de envoltura (children) o diseño (<Outlet />)
};

export default RestrictedRoute;

// ! NOTA:
// ! <Outlet> se usa en elementos de ruta principales para representar sus elementos de ruta secundarios. 
// ! Esto permite que la interfaz de usuario anidada se muestre cuando se representan las rutas secundarias. 
// ! Si la ruta principal coincide exactamente, generará una ruta de índice secundaria o nada si no hay una ruta de índice.