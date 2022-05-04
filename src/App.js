import logo from './logo.svg';
import './App.css';

import { DidUpdate, DidUpdateHook } from './hooks/lifecycle/Compare-Lifecycle-DidUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
		      <DidUpdate></DidUpdate>
          <DidUpdateHook></DidUpdateHook>
        </div>
      </header>
    </div>
  );
}

export default App;
