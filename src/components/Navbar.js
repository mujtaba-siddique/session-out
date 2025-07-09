import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navStyle = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  padding: "15px",
  background: "#eee",
  fontSize: "18px",
};

const activeStyle = {
  fontWeight: "bold",
  color: "blue",
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : {})}>About</NavLink>
      <NavLink to="/skills" style={({ isActive }) => (isActive ? activeStyle : {})}>Skills</NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : {})}>Contact</NavLink>
      <button onClick={handleLogout} style={{ marginLeft: "20px" }}>Logout</button>
    </nav>
  );
};

export default Navbar;
