import { Link } from 'react-router-dom';

import Logout from '../pure/Logout.jsx';

const Menu = ({ userLogged, setUserLogged }) => {

	return (
		<div className="container bg-menu">
			<header className="header-page">
				<div>
					<Link 
						to="/"
						className="logo"
					>
						Brand logo
					</Link>
				</div>
				<nav>
					<ul className="main-menu">
						<li className="item">
							<Link to="/admin">Admin</Link>
						</li>
						<li className="item">
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li className="item">
							<Link to="/profile">Profile</Link>
						</li>
						<li className="item">
							<Link to="/task-list">Tasks</Link>
						</li>
						<li className="item">
							<Link to="/login">Login</Link>
						</li>
						<li className="item">
							<Link to="/register">Register</Link>
						</li>
						<li className="item">
							<Logout />
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};


Menu.propTypes = {

};


export default Menu;
