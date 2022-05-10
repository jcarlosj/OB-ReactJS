import logo from './logo.svg';
import './App.css';

import LoginComponent from './components/RenderizadoCondicional-1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <LoginComponent name="Elisa"></LoginComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
