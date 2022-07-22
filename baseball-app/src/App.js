import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

function App() {
const [value, setValue] = useState({
  strike: 0,
  ball: 0,
  foul: 0
});

  return (
    <div className="App">
      <h1>Baseball App</h1>
      <Display 
        value={value} 
        />
      <Dashboard 
        setValue={setValue}
        value={value} 
        />
    </div>
  );
}

export default App;
