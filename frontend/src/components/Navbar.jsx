import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <h2 className="slide-in">🐟 FishChain</h2>
    <ul className="fade-in">
      <li><Link to="/">🏠 Home</Link></li>
      <li><Link to="/register">📝 Register</Link></li>
      <li><Link to="/producer">🎣 Producer</Link></li>
      <li><Link to="/market">🏪 Market</Link></li>
      <li><Link to="/retail">🛒 Retail</Link></li>
      <li><Link to="/consumer">👥 Consumer</Link></li>
      <li><Link to="/trace">🔍 Trace</Link></li>
    </ul>
  </nav>
);

export default Navbar;