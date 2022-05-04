import logo from './logo.svg';
import './App.css';

import { WillUnmount, WillUnmountHook } from './hooks/lifecycle/Compare-Lifecycle-WillUnmount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="example-components">
		      <WillUnmount></WillUnmount>
          <WillUnmountHook></WillUnmountHook>
        </div>
      </header>
    </div>
  );
}

export default App;
