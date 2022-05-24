import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/task/TaskPage';
import TaskDetailPage from './pages/task/TaskDetailPage';

import './App.scss';
import './App.css';

function App() {
	return (
		<>
			<aside>
				<ul className="main-menu">
					<li className="item-menu"><Link to="/" className="anchor-menu">Home</Link></li>
					<li className="item-menu"><Link to="/about" className="anchor-menu">About</Link></li>
					<li className="item-menu"><Link to="/faqs" className="anchor-menu">FAQs</Link></li>
					<li className="item-menu"><Link to="/404" className="anchor-menu">404</Link></li>
				</ul>
			</aside>
			<main>
				<Routes>		{/** Define conjunto de rutas */}
					<Route path="/" element={ <HomePage /> } />
					<Route path="about" element={ <AboutPage /> } />
					<Route path="faqs" element={ <AboutPage /> } />
					<Route path="profile" element={ <ProfilePage /> } />
					<Route path="tasks">
						<Route index element={ <TaskPage /> } />
  						<Route path=":id" element={<TaskDetailPage />} />
					</Route>
					<Route path="*" element={ <NotFoundPage /> } />
				</Routes>
			</main>
		</>
	);
}

export default App;
