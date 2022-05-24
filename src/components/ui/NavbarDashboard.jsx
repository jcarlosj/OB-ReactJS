import { NavLink } from 'react-router-dom';


const NavbarDashboard = () => {
	return (
		<nav className="container navbar navbar-expand-sm">
			<div className="navbar-collapse">
				<div className="navbar-nav">

					<NavLink
						className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
						to="/dashboard/tasks"
					>
						Tasks
					</NavLink>

					<NavLink
						className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
						to="/dashboard/tasks/29"
					>
						Tasks 29
					</NavLink>
					<NavLink
						className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
						to="/dashboard/tasks/33"
					>
						Tasks 33
					</NavLink>
					<NavLink
						className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
						to="/dashboard/profile"
					>
						Profile
					</NavLink>
				</div>
			</div>
		</nav>
	);
};


NavbarDashboard.propTypes = {

};


export default NavbarDashboard;
