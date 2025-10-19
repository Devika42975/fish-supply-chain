// src/components/RetailDashboard.jsx
import React, { useState } from "react";
import { loadContract } from "../utils/web3Provider";

const RetailDashboard = () => {
  const [batchId, setBatchId] = useState("");
  const [status, setStatus] = useState("");

  const updateStatus = async () => {
    const contract = await loadContract();
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    await contract.methods.updateStatus(batchId, status).send({ from: accounts[0] });
    alert("Retail Status Updated!");
  };

  return (
    <div>
      <h2>Retail Dashboard</h2>
      <input placeholder="Batch ID" onChange={(e) => setBatchId(e.target.value)} />
      <input placeholder="Update Status" onChange={(e) => setStatus(e.target.value)} />
      <button onClick={updateStatus}>Update Status</button>
    </div>
  );
};

export default RetailDashboard;
