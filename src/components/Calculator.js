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

  return (
    <div id="wrapper">
      <div id="display">
        <p>{displayValue}</p>
      </div>
      <div id="row">
        <Button htmlId="white" value="AC" onClick={() => handleButtonClick('AC')} />
        <Button htmlId="white" value="+/-" onClick={() => handleButtonClick('+/-')} />
        <Button htmlId="white" value="%" onClick={() => handleButtonClick('%')} />
        <Button htmlId="orange" value="÷" onClick={() => handleButtonClick('÷')} />
      </div>
      <div id="row">
        <Button htmlId="white" value="7" onClick={() => handleButtonClick('7')} />
        <Button htmlId="white" value="8" onClick={() => handleButtonClick('8')} />
        <Button htmlId="white" value="9" onClick={() => handleButtonClick('9')} />
        <Button htmlId="orange" value="x" onClick={() => handleButtonClick('x')} />
      </div>
      <div id="row">
        <Button htmlId="white" value="4" onClick={() => handleButtonClick('4')} />
        <Button htmlId="white" value="5" onClick={() => handleButtonClick('5')} />
        <Button htmlId="white" value="6" onClick={() => handleButtonClick('6')} />
        <Button htmlId="orange" value="-" onClick={() => handleButtonClick('-')} />
      </div>
      <div id="row">
        <Button htmlId="white" value="1" onClick={() => handleButtonClick('1')} />
        <Button htmlId="white" value="2" onClick={() => handleButtonClick('2')} />
        <Button htmlId="white" value="3" onClick={() => handleButtonClick('3')} />
        <Button htmlId="orange" value="+" onClick={() => handleButtonClick('+')} />
      </div>
      <div id="row">
        <Button htmlId="zero" value="0" onClick={() => handleButtonClick('0')} />
        <Button htmlId="white" value="." onClick={() => handleButtonClick('.')} />
        <Button htmlId="orange" value="=" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
};

export default Calculator;
