import logo from './logo.svg';
import './App.css';
import FiguraGeometrica from './components/FiguraGeometrica';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <FiguraGeometrica />
    </div>
  );
}

export default App;
