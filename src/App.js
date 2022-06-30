import logo from './logo.svg';
import './App.css';

import AxiosComponent from './components/AxiosComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <AxiosComponent></AxiosComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
