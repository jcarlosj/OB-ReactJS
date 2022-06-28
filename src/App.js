import logo from './logo.svg';
import './App.css';

import FetchComponent from './components/FetchComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <FetchComponent></FetchComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
