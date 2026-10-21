import React, { useState } from "react";
import { NexafolioLogo } from "../Navbar";

function Signup() {
  const [mode, setMode] = useState("signup"); // "signup" or "login"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "Intermediate (1-3 yrs)",
    portfolioGoal: "Wealth Accumulation",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <div
        className="nexa-card"
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "var(--bg-surface)",
          border: "1px solid var(--border-medium)",
          borderRadius: "var(--radius-xl)",
          padding: "40px 36px",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ display: "inline-flex", marginBottom: "12px" }}>
            <NexafolioLogo size={40} />
          </div>
          <h2 style={{ fontSize: "1.75rem", color: "#FFF", marginBottom: "6px" }}>
            {mode === "signup" ? "Create Your Nexafolio Account" : "Welcome Back"}
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            {mode === "signup"
              ? "Start managing your multi-asset portfolio with precision."
              : "Sign in to access your portfolio analytics."}
          </p>

          {/* Tab Selector */}
          <div
            style={{
              display: "flex",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "4px",
              borderRadius: "var(--radius-md)",
              marginTop: "20px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <button
              onClick={() => { setMode("signup"); setIsSubmitted(false); }}
              style={{
                flex: 1,
                padding: "8px",
                border: "none",
                background: mode === "signup" ? "var(--bg-surface-elevated)" : "transparent",
                color: mode === "signup" ? "#FFF" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: "0.88rem",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => { setMode("login"); setIsSubmitted(false); }}
              style={{
                flex: 1,
                padding: "8px",
                border: "none",
                background: mode === "login" ? "var(--bg-surface-elevated)" : "transparent",
                color: mode === "login" ? "#FFF" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: "0.88rem",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
              }}
            >
              Log In
            </button>
          </div>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--accent-emerald-dim)",
                border: "1px solid var(--accent-emerald)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-emerald)",
                fontSize: "1.8rem",
                marginBottom: "16px",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: "1.3rem", color: "#FFF", marginBottom: "8px" }}>
              {mode === "signup" ? "Account Initialized!" : "Authenticated Successfully!"}
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "28px" }}>
              Your portfolio workspace is ready. You can now launch your personalized terminal.
            </p>
            <a
              href="http://localhost:3001"
              className="nexa-btn nexa-btn-primary"
              style={{ width: "100%", padding: "14px" }}
            >
              Enter Nexafolio Dashboard &rarr;
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {mode === "signup" && (
              <div>
                <label className="nexa-label">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  className="nexa-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}

            <div>
              <label className="nexa-label">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@domain.com"
                className="nexa-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label className="nexa-label">Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ background: "none", border: "none", color: "var(--accent-emerald)", fontSize: "0.78rem", cursor: "pointer" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••••••"
                className="nexa-input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {mode === "signup" && (
              <div>
                <label className="nexa-label">Investment Experience</label>
                <select
                  className="nexa-select"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="Beginner (< 1 yr)">Beginner (&lt; 1 year)</option>
                  <option value="Intermediate (1-3 yrs)">Intermediate (1-3 years)</option>
                  <option value="Experienced (3-7 yrs)">Experienced (3-7 years)</option>
                  <option value="Quantitative / Algorithmic">Quantitative / Algorithmic</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className="nexa-btn nexa-btn-primary"
              style={{ width: "100%", padding: "14px", marginTop: "10px" }}
            >
              {mode === "signup" ? "Initialize Portfolio Account" : "Sign In To Terminal"}
            </button>

            <div style={{ textAlign: "center", marginTop: "12px", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              By registering, you agree to Nexafolio's Terms of Platform Use and Financial Modeling Disclosures.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
