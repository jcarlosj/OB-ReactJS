import { Navigate } from 'react-router-dom';


const Admin = ({ userLogged }) => {
    if ( ! userLogged ) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="container">
            <h1 className="page_title page_admin">
                Admin
                <div className="title_note">
                    <small>(Static page)</small>
                </div>
            </h1>
            <p className="text-center">(Protected: authenticated user with role 'admin' required)</p>
        </div>
    );
};


export default Admin;
