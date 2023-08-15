import React from 'react';
import './Calculator.css';

const Calculator = () => React.createElement('div', { id: 'wrapper' }, [
  React.createElement('div', { id: 'display' }, [
    React.createElement('p', {}, '0'),
  ]),
  React.createElement('div', { id: 'row' }, [
    React.createElement('button', { type: 'button' }, 'AC'),
    React.createElement('button', { type: 'button' }, '+/-'),
    React.createElement('button', { type: 'button' }, '%'),
    React.createElement('button', { id: 'orange', type: 'button' }, '÷'),
  ]),
  React.createElement('div', { id: 'row' }, [
    React.createElement('button', { type: 'button' }, '7'),
    React.createElement('button', { type: 'button' }, '8'),
    React.createElement('button', { type: 'button' }, '9'),
    React.createElement('button', { id: 'orange', type: 'button' }, 'x'),
  ]),
  React.createElement('div', { id: 'row' }, [
    React.createElement('button', { type: 'button' }, '4'),
    React.createElement('button', { type: 'button' }, '5'),
    React.createElement('button', { type: 'button' }, '6'),
    React.createElement('button', { id: 'orange', type: 'button' }, '-'),
  ]),
  React.createElement('div', { id: 'row' }, [
    React.createElement('button', { type: 'button' }, '1'),
    React.createElement('button', { type: 'button' }, '2'),
    React.createElement('button', { type: 'button' }, '3'),
    React.createElement('button', { id: 'orange', type: 'button' }, '+'),
  ]),
  React.createElement('div', { id: 'row' }, [
    React.createElement('button', { id: 'zero', type: 'button' }, '0'),
    React.createElement('button', { type: 'button' }, '.'),
    React.createElement('button', { id: 'orange', type: 'button' }, '='),
  ]),
]);

export default Calculator;
