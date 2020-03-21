import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import HorizontalLinearStepper from './Login/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={HorizontalLinearStepper} />
      </Switch>
      
      {/* <header className="App-heade r">
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
      </header>*/}
    </div>
  );
}

export default App;
