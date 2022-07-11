import logo from './logo.svg';
import './App.css';

import AxiosCRUD from './components/AxiosCRUD';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <AxiosCRUD></AxiosCRUD>
        </div>
      </header>
    </div>
  );
}

export default App;
