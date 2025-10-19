// src/components/ConsumerView.jsx
import React, { useState } from "react";
import { loadContract } from "../utils/web3Provider";
import { Html5Qrcode } from "html5-qrcode";

const ConsumerView = () => {
  const [batchId, setBatchId] = useState("");
  const [batchDetails, setBatchDetails] = useState(null);
  const [scanning, setScanning] = useState(false);

  // Fetch batch details from blockchain
  const fetchBatch = async (id) => {
    const contract = await loadContract();
    try {
      const batch = await contract.methods.getBatchDetails(id).call();
      setBatchDetails(batch);
    } catch (err) {
      alert("Batch not found!");
    }
  };

  // Start QR code scanner
  const startScan = () => {
    setScanning(true);
    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decodedText) => {
        setBatchId(decodedText);
        fetchBatch(decodedText);
        html5QrCode.stop();
        setScanning(false);
      },
      (errorMessage) => {
        // optional: handle scanning errors
      }
    );
  };

  return (
    <div>
      <h2>Consumer View</h2>

      <input
        placeholder="Enter Batch ID"
        value={batchId}
        onChange={(e) => setBatchId(e.target.value)}
      />
      <button onClick={() => fetchBatch(batchId)}>Verify Batch</button>
      <button onClick={startScan}>Scan QR Code</button>

      {scanning && <div id="reader" style={{ width: 300, height: 300, margin: "20px auto" }} />}

      {batchDetails && (
        <div style={{ marginTop: "20px" }}>
          <h3>Batch Details</h3>
          <p>Batch ID: {batchDetails.batchId}</p>
          <p>Species: {batchDetails.species}</p>
          <p>Origin: {batchDetails.origin}</p>
          <p>Status: {batchDetails.status}</p>
          <p>Owner: {batchDetails.owner}</p>
        </div>
      )}
    </div>
  );
};

export default ConsumerView;
