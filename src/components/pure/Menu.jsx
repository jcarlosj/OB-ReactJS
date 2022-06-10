import { useNavigate, Link } from 'react-router-dom';

import { logoutUser } from '../../helpers/localStorage';

const Menu = ({ userLogged, setUserLogged }) => {

	const navigate = useNavigate();

	const navigateTo = path => {
		navigate( path );
	}

	const logout = () => {
		logoutUser();
		setUserLogged();
		console.log( 'Logout!' )
		navigateTo( '/' );
	}

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
							<Link to="#"
								onClick={ () => {
									logout();
								}}
							>Logout</Link>
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
