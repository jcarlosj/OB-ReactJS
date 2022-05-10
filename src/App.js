import logo from './logo.svg';
import './App.scss';
import './App.css';

import TaskListComponent from './components/containers/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
