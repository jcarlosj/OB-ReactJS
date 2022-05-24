import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {

	const navigate = useNavigate();

	return (
		<div className="bg-dark">

			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark">

					<div className="container-fluid">
						<Link
							className="navbar-brand"
							to="/"
						>
							ToDo
						</Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<NavLink
										className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
										to="/about"
									>
										About
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
										to="/faqs"
									>
										FAQs
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
										to={`/dashboard/tasks/33`}
									>
										Tasks 33
									</NavLink>
								</li>
							</ul>
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
										:	<>
												<button
													className="nav-item nav-link btn"
													onClick={ () => navigate( '/login' ) }
												>
													Login
												</button>
												<button
													className="nav-item nav-link btn"
													onClick={ () => navigate( '/register' ) }
												>
													Register
												</button>
											</>
								}

							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};


export default Navbar;
