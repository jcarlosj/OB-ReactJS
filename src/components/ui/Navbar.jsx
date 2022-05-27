import { Link, NavLink, useNavigate } from 'react-router-dom';

import { deleteUserCredentialData } from '../../helpers/localStorage';
import { ROLES } from '../../models/roles.enum';


const Navbar = ({ data, setData }) => {

	const navigate = useNavigate();

	const handleLogout = () => {
		// console.log( 'Logout' );

		setData({
			logged_user: {
				username: '',
				email: '',
				passwd: '',
				role: ROLES.USER
			},
			users: [],
			total_records: 0,
			logged: false
		});

		deleteUserCredentialData();
	}

	// console.log( 'data', data );

	return (

		<>
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
									<li className="nav-item dropdown">

										<Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Private
										</Link>
										<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
											<li className="nav-item">
												<NavLink
													className={ ({ isActive }) => `dropdown-item ${ isActive ? 'active' : '' }` }
													to={`/404`}
												>
													404
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													className={ ({ isActive }) => `dropdown-item ${ isActive ? 'active' : '' }` }
													to={`/tasks`}
												>
													Tasks
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													className={ ({ isActive }) => `dropdown-item ${ isActive ? 'active' : '' }` }
													to={`/tasks/33`}
												>
													Tasks 33
												</NavLink>
											</li>
										</ul>
									</li>

								</ul>
								<ul className="navbar-nav ml-auto">
									{	data?.logged
											?	<>
													<li className="nav-item dropdown">

														<Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
															<i className="bi bi-person-circle"></i>
														</Link>
														<ul className="dropdown-menu dropdown-logged" aria-labelledby="navbarDropdown">
															<li className="nav-item">
																<Link
																	className="dropdown-item"
																	to={`/profile`}
																>
																	<div>Profile</div>
																	<div>
																		<small>
																			<code>[{ data?.logged_user?.email }]</code>
																		</small>
																	</div>
																</Link>
															</li>
															<li><hr className="dropdown-divider" /></li>
															<li className="nav-item">
																<Link to=""
																	className="dropdown-item"
																	onClick={ handleLogout }
																>
																	Logout
																</Link>
															</li>
															<></>
														</ul>
													</li>
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
		</>
	);
};


export default Navbar;
