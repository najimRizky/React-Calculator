import './App.css';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <div className="baseContainer">
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={12}>
              <div className="results">0</div>
            </Grid>

            <Grid item xs={3}>
              <div className="btnSym">%</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">C</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">CE</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">Del</div>
            </Grid>

            <Grid item xs={3}>
              <div className="btnSym">1/x</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">x²</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">√x</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">÷</div>
            </Grid>

            <Grid item xs={3}>
              <div className="btnNum">7</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnNum">8</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnNum">9</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">×</div>
            </Grid>

            <Grid item xs={3}>
              <div className="btnNum">4</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnNum">5</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnNum">6</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">-</div>
            </Grid>

            <Grid item xs={3}>
              <div className="btnNum">1</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnNum">2</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnNum">3</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">+</div>
            </Grid>

            <Grid item xs={3}>
              <div className="btnSym">+/-</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnNum">0</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnSym">.</div>
            </Grid>
            <Grid item xs={3}>
              <div className="btnEq">=</div>
            </Grid>
          </Grid>
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

      /*<div className="contain">
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
      */