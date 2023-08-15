import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ value, htmlId }) => (
  <div>
    <button id={htmlId} type="button">{value}</button>
  </div>
);

export default Button;
