import './App.scss';
import './App.css';

// import TaskListComponent from './components/containers/TaskList';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
	return (
		<div className="App">
			{/* <TaskListComponent></TaskListComponent> */}
			<LoginFormik></LoginFormik>
			<RegisterFormik></RegisterFormik>
		</div>
	);
}

export default App;
