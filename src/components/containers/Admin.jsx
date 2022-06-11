const Admin = () => {
    return (
        <div className="container">
            <h1 className="page_title page_admin">
                Admin
                <div className="title_note">
                    <small>(Static page)</small>
                </div>
            </h1>
            <p className="text-center">(Protected: authenticated user with role 'superadmin' required)</p>
        </div>
    );
};


export default Admin;
