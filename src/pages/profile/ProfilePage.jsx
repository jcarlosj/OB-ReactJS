import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {

	const navigate = useNavigate();

	return (
		<div className="container mt-5">
			<h1>Profile User</h1>
			<button onClick={ () => navigate( '/tasks' ) }>Tasks</button>
			<button onClick={ () => navigate( -1 ) }>Go back</button>
		</div>
	);
};


ProfilePage.propTypes = {

};


export default ProfilePage;
