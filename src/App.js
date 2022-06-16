import logo from './logo.svg';
import './App.css';

import PromisesComponent from './components/PromisesComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <PromisesComponent></PromisesComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
