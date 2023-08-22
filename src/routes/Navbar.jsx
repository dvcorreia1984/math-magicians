import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <div className="home">
      <Link to="/">Home</Link>
    </div>
    <div className="calculator">
      <Link to="/calculator">Calculator</Link>
    </div>
    <div className="quote">
      <Link to="/quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
