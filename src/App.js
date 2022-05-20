import './App.scss';
import './App.css';

// import TaskListComponent from './components/containers/TaskList';
import LoginFormik from './components/pure/forms/LoginFormik';

function App() {
	return (
		<div className="App">
			{/* <TaskListComponent></TaskListComponent> */}
			<LoginFormik></LoginFormik>
		</div>
	);
}

export default App;
