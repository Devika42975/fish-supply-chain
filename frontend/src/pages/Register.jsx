import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", role: "producer" });
  const [isLoading, setIsLoading] = useState(false);

  const roleEmojis = {
    producer: "🎣",
    market: "🏪",
    retail: "🛒",
    consumer: "👥"
  };

  const handleRegister = () => {
    if (user.email && user.password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert(`🎉 Registration successful for ${user.email} as ${roleEmojis[user.role]} ${user.role}!`);
        setUser({ email: "", password: "", role: "producer" });
      }, 1500);
    } else {
      alert("⚠️ Please fill all fields");
    }
  };

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div className="glass-card bounce-in" style={{ maxWidth: "450px", width: "100%", textAlign: "center" }}>
        <h2 style={{ color: "white", marginBottom: "2rem", fontSize: "2rem" }}>🌟 Join FishChain</h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="📧 Email" 
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })} 
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <input 
            className="modern-input"
            placeholder="🔒 Password" 
            type="password" 
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })} 
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <select 
            className="modern-input"
            value={user.role} 
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            style={{ cursor: "pointer" }}
          >
            <option value="producer">🎣 Producer</option>
            <option value="market">🏪 Market</option>
            <option value="retail">🛒 Retail</option>
            <option value="consumer">👥 Consumer</option>
          </select>
        </div>
        <button 
          className={`modern-btn ${isLoading ? 'loading' : ''}`}
          onClick={handleRegister}
          disabled={isLoading}
          style={{ width: "100%", fontSize: "1.1rem" }}
        >
          {isLoading ? "🔄 Creating Account..." : `🚀 Register as ${roleEmojis[user.role]} ${user.role}`}
        </button>
        <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "1rem" }}>
          Already have an account? <a href="/" style={{ color: "#4ECDC4", textDecoration: "none" }}>Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;