// src/components/MarketDashboard.jsx
import React, { useState, useEffect } from "react";
import { loadContract } from "../utils/web3Provider";

const MarketDashboard = () => {
  const [batchId, setBatchId] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [status, setStatus] = useState("");
  const [batchDetails, setBatchDetails] = useState(null);

  const fetchBatch = async () => {
    const contract = await loadContract();
    try {
      const batch = await contract.methods.getBatchDetails(batchId).call();
      setBatchDetails(batch);
    } catch (err) {
      alert("Batch not found!");
    }
  };

  const transferOwnership = async () => {
    const contract = await loadContract();
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    await contract.methods.transferOwnership(batchId, newOwner).send({ from: accounts[0] });
    alert("Ownership Transferred!");
  };

  const updateStatus = async () => {
    const contract = await loadContract();
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    await contract.methods.updateStatus(batchId, status).send({ from: accounts[0] });
    alert("Status Updated!");
  };

  return (
    <div>
      <h2>Market Dashboard</h2>
      <input placeholder="Batch ID" onChange={(e) => setBatchId(e.target.value)} />
      <button onClick={fetchBatch}>Get Batch Details</button>

      {batchDetails && (
        <div>
          <p>Species: {batchDetails.species}</p>
          <p>Origin: {batchDetails.origin}</p>
          <p>Status: {batchDetails.status}</p>
          <p>Owner: {batchDetails.owner}</p>
        </div>
      )}

      <input placeholder="New Owner Address" onChange={(e) => setNewOwner(e.target.value)} />
      <button onClick={transferOwnership}>Transfer Ownership</button>

      <input placeholder="Update Status" onChange={(e) => setStatus(e.target.value)} />
      <button onClick={updateStatus}>Update Status</button>
    </div>
  );
};

export default MarketDashboard;
