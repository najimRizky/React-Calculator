import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <div className="baseContainer">
          <div className="contain">
            0
          </div>
          <div className="contain">
            <div className="btnNum">X</div>
            <div className="btnNum">X</div>
            <div className="btnNum">X</div>
            <div className="btnNum">X</div>
          </div>
          <div className="contain">
            <li>1/x</li>
            <li>X^2</li>
            <li>sqrtX</li>
            <li>/</li>
          </div>
          <div className="contain">
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>X</li>
          </div>
          <div className="contain">
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>-</li>
          </div>
          <div className="contain">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>+</li>
          </div>
          <div className="contain">
            <li>+/-</li>
            <li>0</li>
            <li>.</li>
            <li>=</li>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

      /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>*/