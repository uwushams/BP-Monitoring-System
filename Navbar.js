import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import CSS file for Navbar

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">LoginPage</Link></li> {/* Link to the login page */}
        <li><Link to="/signup">SignupPage</Link></li> {/* Link to the signup page */}
        <li><Link to="/">Table</Link></li> {/* Link to the table page */}
        <li><Link to="/form">Form</Link></li> {/* Link to the form page */}
      </ul>
    </nav>
  );
};

export default Navbar;
