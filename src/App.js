import logo from './logo.svg';
import './App.css';

import ObservableComponent from './components/ObservableComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <ObservableComponent></ObservableComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
