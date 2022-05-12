import logo from './logo.svg';
import './App.css';

import FatherComponent from './components/FatherComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <FatherComponent></FatherComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
