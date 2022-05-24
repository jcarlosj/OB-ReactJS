import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';

import './App.scss';
import './App.css';

function App() {
	return (
		<Routes>		{/** Define conjunto de rutas */}
			<Route path="/" element={ <HomePage /> } />
			<Route path="*" element={ <NotFoundPage /> } />
		</Routes>
	);
}

export default App;
