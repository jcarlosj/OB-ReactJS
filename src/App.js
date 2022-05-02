import logo from './logo.svg';
import './App.css';
// import { Greeting as GreetingClass } from './components/Greeting-ClassComponent';
// import { Greeting as GreetingFunction } from './components/Greeting-FunctionComponent';
import Example1 from './hooks/Example-useState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          {/* <div className="component class-component">
            <h5>Componente Clase</h5>
            <GreetingClass name="Juan"></GreetingClass>
          </div>
          <div className="component class-component">
            <h5>Componente Funcional</h5>
            <GreetingFunction name="Carlos"></GreetingFunction>
          </div> */}
		  <Example1></Example1>
        </div>
      </header>
    </div>
  );
}

export default App;
