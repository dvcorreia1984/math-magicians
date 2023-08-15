import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ htmlId, value, onClick }) => (
  <button id={htmlId} type="button" onClick={() => onClick(value)}>
    {value}
  </button>
);

export const buttons = [
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

export default Button;
