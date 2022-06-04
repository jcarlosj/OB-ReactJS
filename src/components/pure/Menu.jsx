import { useNavigate, Link } from 'react-router-dom';

const Menu = ({ list }) => {

	const navigate = useNavigate();

	const navigateTo = path => {
		navigate( path );
	}

	return (
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
	);
};


Menu.propTypes = {

};


export default Menu;
