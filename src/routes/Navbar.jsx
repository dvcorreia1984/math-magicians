import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navBar}>
    <h1 style={{ justifyContent: 'flex-start' }}>Math Magicians</h1>
    <div className={styles.menu}>
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <div>|</div>
      <div className="calculator">
        <Link to="/calculator">Calculator</Link>
      </div>
      <div>|</div>
      <div className="quote">
        <Link to="/quote">Quote</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
