import { Routes, Route } from 'react-router-dom';

import DashboardPage from '../pages/dashboard/DashboardPage';
import ProfilePage from '../pages/profile/ProfilePage';
import TaskPage from '../pages/task/TaskPage';
import TaskDetailPage from '../pages/task/TaskDetailPage';
import NavbarDashboard from '../components/ui/NavbarDashboard'


const DashboardRoutes = () => {
	return (
		<>
			<div>
				<NavbarDashboard />
				<Routes>
					<Route path="/" element={ <DashboardPage /> } />
					<Route path="profile" element={ <ProfilePage /> } />
					<Route path="tasks">
						<Route index element={ <TaskPage /> } />
						<Route path=":id" element={<TaskDetailPage />} />
					</Route>
				</Routes>
			</div>
		</>

	);
};


DashboardRoutes.propTypes = {

};


export { DashboardRoutes };
