import React, { useState } from "react";

const ConsumerView = () => {
  const [batchId, setBatchId] = useState("");
  const [batchInfo, setBatchInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getBatchInfo = () => {
    if (!batchId) {
      alert("⚠️ Please enter Batch ID");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const mockInfo = {
        id: batchId,
        species: "🐟 Salmon",
        origin: "🇳🇴 Norway",
        status: "At Retail",
        producer: "Ocean Farm Ltd",
        date: new Date().toLocaleDateString(),
        weight: "2.5 kg",
        quality: "Premium",
        certifications: ["Organic", "Sustainable"],
        journey: [
          { stage: "Caught", date: "2024-01-01", location: "Norwegian Sea" },
          { stage: "Processed", date: "2024-01-02", location: "Processing Plant" },
          { stage: "Market", date: "2024-01-05", location: "Central Market" },
          { stage: "Retail", date: "2024-01-10", location: "FreshMart Store" }
        ]
      };
      setBatchInfo(mockInfo);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <div className="glass-card bounce-in" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ color: "white", marginBottom: "2rem", fontSize: "2.5rem", textAlign: "center" }}>
          👥 Consumer View
        </h2>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="🔍 Enter Batch ID to trace your fish" 
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)} 
          />
        </div>
        
        <button 
          className={`modern-btn ${isLoading ? 'loading' : ''}`}
          onClick={getBatchInfo}
          disabled={isLoading}
          style={{ width: "100%", fontSize: "1.2rem", padding: "1.2rem" }}
        >
          {isLoading ? "🔄 Tracing..." : "🔍 Get Batch Information"}
        </button>
      </div>
      
      {batchInfo && (
        <div className="glass-card fade-in" style={{ maxWidth: "700px", margin: "2rem auto 0" }}>
          <h3 style={{ color: "white", marginBottom: "2rem", fontSize: "2rem", textAlign: "center" }}>
            📊 Fish Information
          </h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            <div>
              <h4 style={{ color: "#4ECDC4", marginBottom: "1rem" }}>📝 Basic Info</h4>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🆔 ID:</strong> {batchInfo.id}</p>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🐠 Species:</strong> {batchInfo.species}</p>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🌍 Origin:</strong> {batchInfo.origin}</p>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>⚖️ Weight:</strong> {batchInfo.weight}</p>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🏆 Quality:</strong> {batchInfo.quality}</p>
            </div>
            
            <div>
              <h4 style={{ color: "#FF6B6B", marginBottom: "1rem" }}>🏭 Producer Info</h4>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🏢 Producer:</strong> {batchInfo.producer}</p>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>📅 Date:</strong> {batchInfo.date}</p>
              <p style={{ color: "white", margin: "0.5rem 0" }}><strong>📍 Status:</strong> {batchInfo.status}</p>
              <div style={{ marginTop: "1rem" }}>
                <strong style={{ color: "white" }}>🏅 Certifications:</strong>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {batchInfo.certifications.map((cert, i) => (
                    <span key={i} className="status-badge" style={{ fontSize: "0.8rem" }}>
                      ✅ {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <h4 style={{ color: "#667eea", marginBottom: "1rem" }}>🛫 Supply Chain Journey</h4>
          <div style={{ display: "grid", gap: "1rem" }}>
            {batchInfo.journey.map((step, i) => (
              <div key={i} className="batch-card" style={{ 
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                animationDelay: `${i * 0.2}s`
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ 
                    width: "40px", 
                    height: "40px", 
                    borderRadius: "50%", 
                    background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold"
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5 style={{ color: "white", margin: "0 0 0.5rem 0" }}>{step.stage}</h5>
                    <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontSize: "0.9rem" }}>
                      📅 {step.date} • 📍 {step.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsumerView;