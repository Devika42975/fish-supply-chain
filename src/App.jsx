import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProducerDashboard from "./components/ProducerDashboard";
import MarketDashboard from "./components/MarketDashboard";
import RetailDashboard from "./components/RetailDashboard";
import ConsumerView from "./components/ConsumerView";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/producer" element={<ProducerDashboard />} />
      <Route path="/market" element={<MarketDashboard />} />
      <Route path="/retail" element={<RetailDashboard />} />
      <Route path="/consumer" element={<ConsumerView />} />
    </Routes>
  </Router>
);

export default App;
