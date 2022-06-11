const Dashboard = ({ userLogged }) => {
    return (
        <div className="container">
            <h1 className="page_title page_dashboard">
                Dashboard
                <div className="title_note">
                    <small>(Static page)</small>
                </div>
            </h1>
            <p className="text-center">(Protected: authenticated 'admin' required)</p>
        </div>
    );
};


export default Dashboard;
