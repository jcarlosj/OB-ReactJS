import logo from './logo.svg';
import './App.css';
// import { Greeting as GreetingClass } from './components/Greeting-ClassComponent';
// import { Greeting as GreetingFunction } from './components/Greeting-FunctionComponent';
import Example2 from './hooks/Example-useEffect-useRef';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
		  <Example2></Example2>
        </div>
      </header>
    </div>
  );
}

export default App;
