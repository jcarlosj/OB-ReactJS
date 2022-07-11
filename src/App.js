import logo from './logo.svg';
import './App.css';

import LoginFormik from './components/forms/LoginFormik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
          <LoginFormik></LoginFormik>
        </div>
      </header>
    </div>
  );
}

export default App;
