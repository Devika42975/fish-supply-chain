import React, { useState } from "react";
import { QRCodeSVG as QRCode } from "qrcode.react";

const TraceFish = () => {
  const [batchId, setBatchId] = useState("");
  const [traceData, setTraceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const traceBatch = () => {
    if (!batchId) {
      alert("⚠️ Please enter Batch ID");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const mockTrace = {
        id: batchId,
        species: "🐟 Salmon",
        origin: "🇳🇴 Norway",
        status: "At Retail",
        producer: "Ocean Farm Ltd",
        weight: "2.5 kg",
        quality: "Premium",
        sustainability: "95%",
        journey: [
          { stage: "🎣 Caught", date: "2024-01-01", location: "Norwegian Sea", temp: "2°C", quality: "Fresh" },
          { stage: "🏭 Processed", date: "2024-01-02", location: "Processing Plant", temp: "0°C", quality: "Excellent" },
          { stage: "🏪 Market", date: "2024-01-05", location: "Central Market", temp: "4°C", quality: "Good" },
          { stage: "🛒 Retail", date: "2024-01-10", location: "FreshMart Store", temp: "3°C", quality: "Fresh" }
        ]
      };
      setTraceData(mockTrace);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <div className="glass-card bounce-in" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ color: "white", marginBottom: "2rem", fontSize: "2.5rem", textAlign: "center" }}>
          🔍 Trace Your Fish
        </h2>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="🆔 Enter Batch ID for complete traceability" 
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)} 
          />
        </div>
        
        <button 
          className={`modern-btn ${isLoading ? 'loading' : ''}`}
          onClick={traceBatch}
          disabled={isLoading}
          style={{ width: "100%", fontSize: "1.2rem", padding: "1.2rem" }}
        >
          {isLoading ? "🔄 Tracing Journey..." : "🔍 Start Tracing"}
        </button>
      </div>
      
      {traceData && (
        <div style={{ marginTop: "3rem" }}>
          <div className="glass-card fade-in" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "2rem" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.8rem" }}>
                  📊 Batch Information
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  <div>
                    <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🆔 ID:</strong> {traceData.id}</p>
                    <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🐠 Species:</strong> {traceData.species}</p>
                    <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🌍 Origin:</strong> {traceData.origin}</p>
                  </div>
                  <div>
                    <p style={{ color: "white", margin: "0.5rem 0" }}><strong>⚖️ Weight:</strong> {traceData.weight}</p>
                    <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🏆 Quality:</strong> {traceData.quality}</p>
                    <p style={{ color: "white", margin: "0.5rem 0" }}><strong>🌱 Sustainability:</strong> {traceData.sustainability}</p>
                  </div>
                </div>
              </div>
              
              <div style={{ textAlign: "center" }}>
                <h4 style={{ color: "white", marginBottom: "1rem" }}>📱 QR Code</h4>
                <div style={{ 
                  background: "white", 
                  padding: "1rem", 
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}>
                  <QRCode value={batchId} size={150} />
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem", fontSize: "0.9rem" }}>Scan for mobile view</p>
              </div>
            </div>
            
            <h4 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.6rem" }}>
              🛫 Supply Chain Journey
            </h4>
            <div style={{ position: "relative" }}>
              {/* Journey Line */}
              <div style={{
                position: "absolute",
                left: "20px",
                top: "20px",
                bottom: "20px",
                width: "3px",
                background: "linear-gradient(to bottom, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
                borderRadius: "2px"
              }}></div>
              
              {traceData.journey.map((step, i) => (
                <div key={i} className="fade-in" style={{ 
                  position: "relative",
                  marginLeft: "60px",
                  marginBottom: "2rem",
                  animationDelay: `${i * 0.3}s`
                }}>
                  {/* Journey Point */}
                  <div style={{
                    position: "absolute",
                    left: "-60px",
                    top: "10px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                  }}>
                    {i + 1}
                  </div>
                  
                  <div className="batch-card" style={{ 
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}>
                    <h5 style={{ color: "white", margin: "0 0 1rem 0", fontSize: "1.3rem" }}>{step.stage}</h5>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                      <p style={{ color: "rgba(255,255,255,0.9)", margin: "0.3rem 0" }}><strong>📅 Date:</strong> {step.date}</p>
                      <p style={{ color: "rgba(255,255,255,0.9)", margin: "0.3rem 0" }}><strong>📍 Location:</strong> {step.location}</p>
                      <p style={{ color: "rgba(255,255,255,0.9)", margin: "0.3rem 0" }}><strong>🌡️ Temp:</strong> {step.temp}</p>
                      <p style={{ color: "rgba(255,255,255,0.9)", margin: "0.3rem 0" }}><strong>✅ Quality:</strong> {step.quality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraceFish;