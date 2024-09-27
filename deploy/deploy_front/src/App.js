import logo from './logo.svg';
import './App.css';
import { instance } from './api/config/instance';

function App() {

  const handleTestButtonOnClick = async () => {
    const response = await instance.get("/test");
    alert(response.data);
 }
  return (
    <div className="App">
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
        <button onClick={handleTestButtonOnClick}>테스트</button>
      </header>
    </div>
  );
}

export default App;
