import React, { useState } from 'react';
import './Calculator.css';
import Button, { buttons } from './Button';
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
