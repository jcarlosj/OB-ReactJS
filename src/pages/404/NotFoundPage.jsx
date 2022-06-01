import { useLocation } from 'react-router-dom';

import Footer from '../../components/ui/Footer';

const NotFoundPage = () => {

	const location = useLocation();

	console.log( 'We are in Route:', location.pathname );

	return (
		<div className="container mt-5">
			<h1> 404 - Page Not Found</h1>
			<Footer />
		</div>
	);
}

export default NotFoundPage;
