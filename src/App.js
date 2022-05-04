import logo from './logo.svg';
import './App.css';

import LifecycleClass from './components/LifeCycle-Class';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
		    <LifecycleClass></LifecycleClass>
        </div>
      </header>
    </div>
  );
}

export default App;
