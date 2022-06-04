import Menu from '../components/pure/Menu';

const MainRoute = () => {
    const linkList = [
        { text: 'Login', path: '/login' },
        { text: 'Register', path: '/register' },
        { text: 'Task list', path: '/task-list' }
    ];

    return (
        <div>
            <Menu list={ linkList } />
        </div>
    );
};


export default MainRoute;
