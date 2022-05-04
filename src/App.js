import logo from './logo.svg';
import './App.css';
import Allcycles from './hooks/lifecycle/AllCycles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <Allcycles></Allcycles>
        </div>
      </header>
    </div>
  );
}

export default App;
