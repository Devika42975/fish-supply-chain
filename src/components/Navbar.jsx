import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h2>FishChain</h2>
    <ul>
      <li><Link to="/producer">Producer</Link></li>
      <li><Link to="/market">Market</Link></li>
      <li><Link to="/retail">Retail</Link></li>
      <li><Link to="/consumer">Consumer</Link></li>
      <li><Link to="/trace">Trace</Link></li>
    </ul>
  </nav>
);

export default Navbar;
