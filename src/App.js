import logo from './logo.svg';
import './App.css';

import OptionalRender from './components/OptionalRender';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <OptionalRender></OptionalRender>
        </div>
      </header>
    </div>
  );
}

export default App;
