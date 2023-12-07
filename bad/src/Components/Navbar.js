// src/Navbar.js
import React from "react";
import "./Navbar.css";
const Navbar = ({ setLoggedIn }) => {
  const handleLogout = () => {
    // Implement the logic for logout
    setLoggedIn(false);
    console.log("Logout logic goes here");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <label>Book A Doc</label>
      </div>
      <div className="navbar-right">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
