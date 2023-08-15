import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (value) => {
    const newCalculatorData = calculate(calculatorData, value);
    setCalculatorData(newCalculatorData);
  };

  const displayValue = calculatorData.next || calculatorData.total || '0';

  const buttons = [
    { htmlId: 'white', value: 'AC' },
    { htmlId: 'white', value: '+/-' },
    { htmlId: 'white', value: '%' },
    { htmlId: 'orange', value: '÷' },
    { htmlId: 'white', value: '7' },
    { htmlId: 'white', value: '8' },
    { htmlId: 'white', value: '9' },
    { htmlId: 'orange', value: 'x' },
    { htmlId: 'white', value: '4' },
    { htmlId: 'white', value: '5' },
    { htmlId: 'white', value: '6' },
    { htmlId: 'orange', value: '-' },
    { htmlId: 'white', value: '1' },
    { htmlId: 'white', value: '2' },
    { htmlId: 'white', value: '3' },
    { htmlId: 'orange', value: '+' },
    { htmlId: 'zero', value: '0' },
    { htmlId: 'white', value: '.' },
    { htmlId: 'orange', value: '=' },
  ];

  return (
    <div id="wrapper">
      <div id="display">
        <p>{displayValue}</p>
      </div>
      {buttons.map((button) => (
        <Button
          key={button.value}
          htmlId={button.htmlId}
          value={button.value}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

export default Calculator;
