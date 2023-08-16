import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <div id="main">
        <div className="App">
          <h1>Calculator App</h1>
          <Calculator />
        </div>
        <div id="Quote">
          <Quote />
        </div>
      </div>
    </>
  );
}

export default App;
