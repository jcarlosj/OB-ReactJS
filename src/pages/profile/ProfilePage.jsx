import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {

	const navigate = useNavigate();

	return (
		<>
			<h1>Profile User</h1>
			<button onClick={ () => navigate( -1 ) }>Go back</button>
		</>
	);
};


ProfilePage.propTypes = {

};


export default ProfilePage;
