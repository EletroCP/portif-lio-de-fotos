import logo from '../rsc/logo.svg';
import '../css/App.css';
import { useContext } from 'react';
import { Context } from '../context/ContextProvider';

function App() {
  const picsDb = useContext(Context);
  return (
    <div className="App">
      {console.log(picsDb)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
