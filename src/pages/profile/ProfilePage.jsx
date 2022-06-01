import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const ProfilePage = () => {

	const navigate = useNavigate();

	return (
		<div className="container mt-5">
			<h1>Profile User</h1>
			<Button variant="contained" onClick={ () => navigate( '/tasks' ) }>Tasks</Button>
			<Button variant="contained" onClick={ () => navigate( -1 ) }>Go back</Button>
		</div>
	);
};


ProfilePage.propTypes = {

};


export default ProfilePage;
