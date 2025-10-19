import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProducerDashboard from "./components/ProducerDashboard";
import MarketDashboard from "./components/MarketDashboard";
import RetailDashboard from "./components/RetailDashboard";
import ConsumerView from "./components/ConsumerView";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TraceFish from "./pages/TraceFish";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producer" element={<ProducerDashboard />} />
        <Route path="/market" element={<MarketDashboard />} />
        <Route path="/retail" element={<RetailDashboard />} />
        <Route path="/consumer" element={<ConsumerView />} />
        <Route path="/trace" element={<TraceFish />} />
      </Routes>
    </Router>
  );
};

export default App;