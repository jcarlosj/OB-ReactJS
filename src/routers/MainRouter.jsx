import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AppRoutes } from './AppRoutes';
import { DashboardRoutes } from './DashboardRoutes';

import Navbar from '../components/ui/Navbar';

const MainRouter = () => {

	const [ user, setUser ] = useState({
		logged: false
	});

	return (
		<>
			<BrowserRouter>
				<Navbar user={ user } />
				<Routes>
					<Route path="/*" element={
						<PublicRoutes user={ user }>
							<AppRoutes />
						</PublicRoutes>
					}/>
					<Route path="/dashboard/*" element={
						<PrivateRoutes user={ user }>
							<DashboardRoutes />
						</PrivateRoutes>
					}/>
				</Routes>
			</BrowserRouter>
		</>
	);
};


MainRouter.propTypes = {

};


export default MainRouter;
