import React, { useState } from "react";
import { loadContract } from "../utils/web3Provider";
import QRCode from "qrcode.react";

const ProducerDashboard = () => {
  const [batch, setBatch] = useState({ id: "", species: "", origin: "" });
  const [batches, setBatches] = useState([]); // store all registered batches

  const registerBatch = async () => {
    if (!batch.id || !batch.species || !batch.origin) {
      alert("Please fill all fields!");
      return;
    }

    const contract = await loadContract();
    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    try {
      await contract.methods
        .registerBatch(batch.id, batch.species, batch.origin)
        .send({ from: accounts[0] });

      alert("Batch Registered Successfully!");

      // Add batch to local list
      setBatches((prev) => [...prev, { ...batch }]);
      setBatch({ id: "", species: "", origin: "" }); // reset form
    } catch (err) {
      console.error(err);
      alert("Error registering batch!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Producer Dashboard</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Batch ID"
          value={batch.id}
          onChange={(e) => setBatch({ ...batch, id: e.target.value })}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Species"
          value={batch.species}
          onChange={(e) => setBatch({ ...batch, species: e.target.value })}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Origin"
          value={batch.origin}
          onChange={(e) => setBatch({ ...batch, origin: e.target.value })}
        />
      </div>

      <button onClick={registerBatch} style={{ marginBottom: "20px" }}>
        Register Batch
      </button>

      {/* List of registered batches with QR codes */}
      {batches.length > 0 && (
        <div>
          <h3>All Registered Batches</h3>
          {batches.map((b, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>
                <p><strong>Batch ID:</strong> {b.id}</p>
                <p><strong>Species:</strong> {b.species}</p>
                <p><strong>Origin:</strong> {b.origin}</p>
              </div>
              <QRCode value={b.id} size={120} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProducerDashboard;
