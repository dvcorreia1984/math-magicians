import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ value, htmlId, onClick }) => (
  <button id={htmlId} type="button" onClick={onClick}>
    {value}
  </button>
);

export default Button;
