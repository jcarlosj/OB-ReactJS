import logo from './logo.svg';
import './App.css';
// import { Greeting as GreetingClass } from './components/Greeting-ClassComponent';
// import { Greeting as GreetingFunction } from './components/Greeting-FunctionComponent';
import Example3 from './hooks/Example-useContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
		  <Example3></Example3>
        </div>
      </header>
    </div>
  );
}

export default App;
