import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look at my coding projects:
        </p>
        <a
          className="App-link"
          href="https://github.com/lijimo"
          target="_blank"
          rel="noopener noreferrer"
        >
          link to my github
        </a>
      </header>
    </div>
  );
}

export default App;
