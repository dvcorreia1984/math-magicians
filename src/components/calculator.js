import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <div id="wrapper">
    <div id="display">
      <p>0</p>
    </div>
    <div id="row">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button id="orange" type="button">
        ÷
      </button>
    </div>
    <div id="row">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button id="orange" type="button">
        x
      </button>
    </div>
    <div id="row">
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button id="orange" type="button">
        -
      </button>
    </div>
    <div id="row">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button id="orange" type="button">
        +
      </button>
    </div>
    <div id="row">
      <button id="zero" type="button">
        0
      </button>
      <button type="button">.</button>
      <button id="orange" type="button">
        =
      </button>
    </div>
  </div>
);

export default Calculator;
