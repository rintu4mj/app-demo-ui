import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {

  const [list, setList] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    
    axios.get(`http://app-demo-ms-service:8081/api/status`)
    .then(res => {
      const lists = res.data;
      setList(lists);
    })

  });

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
          {list}
        </a>
      </header>
    </div>
  );
}

export default App;
