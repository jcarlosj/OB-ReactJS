import './App.css';
import Clock from './components/Clock';
import FC_Clock from './components/ClockFunction';

function App() {
  return (
    <div className="App">
      <div className="component">
        <h1>Componente de clase</h1>
        <p>Componente dado</p>
        <Clock></Clock>
      </div>
      <div className="component">
        <h1>Componente de función</h1>
        <p>Componente convertido a funcional component</p>
        <FC_Clock></FC_Clock>
      </div>
    </div>
  );
}

export default App;
