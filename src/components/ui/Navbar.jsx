import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ user }) => {
	return (
		<div className="bg-dark">
			<nav className="container navbar navbar-expand-sm navbar-dark bg-dark">

				<Link
					className="navbar-brand"
					to="/"
				>
					ToDo
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">

						<NavLink
							className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
							to="/about"
						>
							About
						</NavLink>

						<NavLink
							className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
							to="/faqs"
						>
							FAQs
						</NavLink>
						<NavLink
							className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
							to={`/tasks/33`}>
							Tasks
						</NavLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">

						{	user.logged
								?	<>
										<span className="nav-item nav-link text-info">
											<code>[user-name]</code>
										</span>
										<button
											className="nav-item nav-link btn"
										>
											Logout
										</button>
									</>
								:	<button
										className="nav-item nav-link btn"
									>
										Login
									</button>
						}

					</ul>
				</div>
			</nav>
		</div>
	);
};


export default Navbar;
