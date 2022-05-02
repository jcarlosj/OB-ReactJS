import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting-ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="component class-component">
          <Greeting name="Juan"></Greeting>
        </div>
      </header>
    </div>
  );
}

export default App;
