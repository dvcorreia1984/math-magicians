import React from 'react';
import './Calculator.css';
import Button from './Button';

const Calculator = () => (
  <div id="wrapper">
    <div id="display">
      <p>0</p>
    </div>
    <div id="row">
      <Button htmlId="white" value="AC" />
      <Button htmlId="white" value="+/-" />
      <Button htmlId="white" value="%" />
      <Button htmlId="orange" value="÷" />
    </div>
    <div id="row">
      <Button htmlId="white" value="7" />
      <Button htmlId="white" value="8" />
      <Button htmlId="white" value="9" />
      <Button htmlId="orange" value="x" />
    </div>
    <div id="row">
      <Button htmlId="white" value="4" />
      <Button htmlId="white" value="5" />
      <Button htmlId="white" value="6" />
      <Button htmlId="orange" value="-" />
    </div>
    <div id="row">
      <Button htmlId="white" value="1" />
      <Button htmlId="white" value="2" />
      <Button htmlId="white" value="3" />
      <Button htmlId="orange" value="+" />
    </div>
    <div id="row">
      <Button htmlId="zero" value="0" />
      <Button htmlId="white" value="." />
      <Button htmlId="orange" value="=" />
    </div>
  </div>
);

export default Calculator;
