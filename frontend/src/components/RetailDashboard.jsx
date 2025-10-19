import React, { useState } from "react";

const RetailDashboard = () => {
  const [batchId, setBatchId] = useState("");
  const [updates, setUpdates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateStatus = () => {
    if (!batchId) {
      alert("⚠️ Please enter Batch ID");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const update = { batchId, status: "At Retail", timestamp: new Date().toLocaleString(), store: "FreshMart Store" };
      setUpdates([...updates, update]);
      setBatchId("");
      setIsLoading(false);
      alert("🎉 Status Updated Successfully!");
    }, 1000);
  };

  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <div className="glass-card bounce-in" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ color: "white", marginBottom: "2rem", fontSize: "2.5rem", textAlign: "center" }}>
          🛒 Retail Dashboard
        </h2>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="🆔 Enter Batch ID" 
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)} 
          />
        </div>
        
        <button 
          className={`modern-btn ${isLoading ? 'loading' : ''}`}
          onClick={updateStatus}
          disabled={isLoading}
          style={{ width: "100%", fontSize: "1.2rem", padding: "1.2rem" }}
        >
          {isLoading ? "🔄 Updating..." : "🛒 Update to Retail Status"}
        </button>
      </div>
      
      {updates.length > 0 && (
        <div style={{ marginTop: "3rem" }}>
          <h3 className="fade-in" style={{ color: "white", fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>
            📋 Retail Updates ({updates.length})
          </h3>
          {updates.map((u, i) => (
            <div key={i} className="batch-card fade-in" style={{ 
              maxWidth: "600px", 
              margin: "1.5rem auto",
              animationDelay: `${i * 0.1}s`
            }}>
              <h4 style={{ color: "#667eea", margin: "0 0 1rem 0" }}>🆔 {u.batchId}</h4>
              <p style={{ margin: "0.5rem 0", color: "#666" }}><strong>📍 Status:</strong> {u.status}</p>
              <p style={{ margin: "0.5rem 0", color: "#666" }}><strong>🛒 Store:</strong> {u.store}</p>
              <p style={{ margin: "0.5rem 0", color: "#666" }}><strong>⏰ Updated:</strong> {u.timestamp}</p>
              <span className="status-badge">✅ Available</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RetailDashboard;