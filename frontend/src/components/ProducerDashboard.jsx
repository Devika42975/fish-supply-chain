import React, { useState } from "react";
import { QRCodeSVG as QRCode } from "qrcode.react";

const ProducerDashboard = () => {
  const [batch, setBatch] = useState({ id: "", species: "", origin: "", weight: "", date: "" });
  const [batches, setBatches] = useState([]);
  const [showSpeciesSuggestions, setShowSpeciesSuggestions] = useState(false);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const speciesSuggestions = ["🐟 Salmon", "🐠 Tuna", "🐟 Cod", "🐠 Mackerel", "🐟 Sardine", "🐠 Trout", "🐟 Bass", "🐠 Snapper"];
  const originSuggestions = ["🇳🇴 Norway", "🇺🇸 Alaska", "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", "🇨🇱 Chile", "🇨🇦 Canada", "🇯🇵 Japan", "🇮🇸 Iceland", "🇦🇺 Australia"];

  const generateBatchId = () => {
    const prefix = "FISH";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    setBatch({ ...batch, id: `${prefix}-${timestamp}-${random}` });
  };

  const registerBatch = async () => {
    if (!batch.id || !batch.species || !batch.origin) {
      alert("⚠️ Please fill all required fields!");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setBatches([...batches, { ...batch, timestamp: new Date().toLocaleString(), status: "Registered" }]);
      setBatch({ id: "", species: "", origin: "", weight: "", date: "" });
      setIsLoading(false);
      alert("🎉 Batch Registered Successfully!");
    }, 1500);
  };

  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <div className="glass-card bounce-in" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ color: "white", marginBottom: "2rem", fontSize: "2.5rem", textAlign: "center" }}>
          🐟 Producer Dashboard
        </h2>
        
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="🆔 Batch ID" 
            value={batch.id}
            onChange={(e) => setBatch({ ...batch, id: e.target.value })}
            style={{ flex: 1 }}
          />
          <button 
            className="modern-btn"
            onClick={generateBatchId} 
            style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}
          >
            ✨ Generate
          </button>
        </div>

        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="🐠 Species (e.g., Salmon, Tuna)" 
            value={batch.species}
            onChange={(e) => setBatch({ ...batch, species: e.target.value })}
            onFocus={() => setShowSpeciesSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSpeciesSuggestions(false), 200)}
          />
          {showSpeciesSuggestions && (
            <div className="suggestions" style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: "0.5rem" }}>
              {speciesSuggestions.filter(s => s.toLowerCase().includes(batch.species.toLowerCase())).map((species, i) => (
                <div key={i} className="suggestion-item" onClick={() => {
                  setBatch({ ...batch, species: species.split(' ').slice(1).join(' ') });
                  setShowSpeciesSuggestions(false);
                }}>
                  {species}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="🌍 Origin (e.g., Norway, Alaska)" 
            value={batch.origin}
            onChange={(e) => setBatch({ ...batch, origin: e.target.value })}
            onFocus={() => setShowOriginSuggestions(true)}
            onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)}
          />
          {showOriginSuggestions && (
            <div className="suggestions" style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: "0.5rem" }}>
              {originSuggestions.filter(o => o.toLowerCase().includes(batch.origin.toLowerCase())).map((origin, i) => (
                <div key={i} className="suggestion-item" onClick={() => {
                  setBatch({ ...batch, origin: origin.split(' ').slice(1).join(' ') });
                  setShowOriginSuggestions(false);
                }}>
                  {origin}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <input 
            className="modern-input"
            placeholder="⚖️ Weight (kg)" 
            value={batch.weight}
            onChange={(e) => setBatch({ ...batch, weight: e.target.value })}
            type="number"
            style={{ flex: 1 }}
          />
          <input 
            className="modern-input"
            placeholder="📅 Catch Date" 
            value={batch.date}
            onChange={(e) => setBatch({ ...batch, date: e.target.value })}
            type="date"
            style={{ flex: 1 }}
          />
        </div>

        <button 
          className={`modern-btn ${isLoading ? 'loading' : ''}`}
          onClick={registerBatch} 
          disabled={isLoading}
          style={{ width: "100%", fontSize: "1.2rem", padding: "1.2rem" }}
        >
          {isLoading ? "🔄 Registering..." : "🚀 Register Batch"}
        </button>
      </div>
      
      {batches.length > 0 && (
        <div style={{ marginTop: "3rem" }}>
          <h3 className="fade-in" style={{ color: "white", fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>
            📦 Registered Batches ({batches.length})
          </h3>
          {batches.map((b, i) => (
            <div key={i} className="batch-card fade-in" style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "2rem",
              maxWidth: "800px",
              margin: "1.5rem auto",
              animationDelay: `${i * 0.1}s`
            }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: "#667eea", margin: "0 0 1rem 0", fontSize: "1.3rem" }}>🆔 {b.id}</h4>
                <p style={{ margin: "0.5rem 0", color: "#666", fontSize: "1rem" }}><strong>🐠 Species:</strong> {b.species}</p>
                <p style={{ margin: "0.5rem 0", color: "#666", fontSize: "1rem" }}><strong>🌍 Origin:</strong> {b.origin}</p>
                {b.weight && <p style={{ margin: "0.5rem 0", color: "#666", fontSize: "1rem" }}><strong>⚖️ Weight:</strong> {b.weight} kg</p>}
                {b.date && <p style={{ margin: "0.5rem 0", color: "#666", fontSize: "1rem" }}><strong>📅 Date:</strong> {b.date}</p>}
                <p style={{ margin: "0.5rem 0", color: "#666", fontSize: "1rem" }}><strong>⏰ Registered:</strong> {b.timestamp}</p>
                <span className="status-badge">✅ {b.status}</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <QRCode value={b.id} size={120} />
                <p style={{ margin: "1rem 0 0 0", fontSize: "0.9rem", color: "#666", fontWeight: "500" }}>📱 Scan QR Code</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProducerDashboard;