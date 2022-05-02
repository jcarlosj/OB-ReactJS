import logo from './logo.svg';
import './App.css';
import ContactList from './components/containers/ContactList';

function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
