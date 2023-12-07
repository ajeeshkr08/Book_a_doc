// src/Sidebar.js
import React from "react";
const Sidebar = ({ setConstentVisible, setLoggedIn }) => {
  const toggler = (n) => {
    setConstentVisible(n);
  };
  const handleLogout = () => {
    // Implement the logic for logout
    setLoggedIn(false);
    console.log("Logout logic goes here");
  };
  return (
    <nav className="sidebar">
      <h1>Book A Doc</h1>
      <ul>
        <li onClick={() => toggler(1)}>
          <label>View Appointments</label>
        </li>
        <li onClick={() => toggler(2)}>
          <label>Manage and Reschedule</label>
        </li>
        <li onClick={() => toggler(3)}>
          <label>Manage Doctors</label>
        </li>
        <li onClick={handleLogout}>
          <label>Logout</label>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
