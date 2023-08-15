import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ htmlId, value, onClick }) => (
  <button id={htmlId} type="button" onClick={() => onClick(value)}>
    {value}
  </button>
);

export default Button;
