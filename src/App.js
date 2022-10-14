import logo from './logo.svg';
import './App.css';
import { useCelo } from '@celo/react-celo';


function App() {
  const { connect, address } = useCelo();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {address ? (
        <div>Connected to {address}</div>
      ) : (
        <button onClick={connect}>Connect wallet</button>
      )}

      
        <p>
          Edit <code>src/App.js</code> and save to relsoad.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
