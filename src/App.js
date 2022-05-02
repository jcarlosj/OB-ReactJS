import logo from './logo.svg';
import './App.css';
// import { Greeting as GreetingClass } from './components/Greeting-ClassComponent';
// import { Greeting as GreetingFunction } from './components/Greeting-FunctionComponent';
import PropsChildrenComponent from './components/PropsChildrenComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
		  <PropsChildrenComponent name="Componente hijo">
			  <h4>HTML desde el componente padre al componente hijo</h4>
			  <p>Este contenido es tratado como <em>props</em> del <em>children</em>, es decir, mostrara en la vista aquello que se encuentre entre las etiquetas de apertura y cierre de un componente, invocado desde un componente padre.</p>
		  </PropsChildrenComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
