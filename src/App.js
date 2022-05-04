import logo from './logo.svg';
import './App.css';

import { DidMount, DidMountHook } from './hooks/lifecycle/Compare-Lifecycle-DidMount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
		      <DidMount></DidMount>
          <DidMountHook></DidMountHook>
        </div>
      </header>
    </div>
  );
}

export default App;
