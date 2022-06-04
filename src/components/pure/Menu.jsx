import { useNavigate, Link } from 'react-router-dom';

const Menu = ({ list }) => {

	const navigate = useNavigate();

	const navigateTo = path => {
		navigate( path );
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
				<ul className="main-menu">
					{	list.map( ({ text, path }, index ) => (
							<li
								className="item"
								key={ index }
								onClick={ () => navigateTo( path ) }

							>
								<Link to={ path }>
									<span>{ text }</span>
								</Link>
							</li>
						))
					}
				</ul>
			</header>
		</div>
	);
};


Menu.propTypes = {

};


export default Menu;
