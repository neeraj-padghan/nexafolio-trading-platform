import React, { useState } from "react";

function Hero() {
  const [query, setQuery] = useState("");

  const quickLinks = [
    "Portfolio Rebalancing",
    "P&L Attribution Formula",
    "Connect API Keys",
    "Tax-Loss Harvesting",
    "Mark-to-Market Feeds",
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0D1629 0%, #080C16 100%)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "60px 0 50px 0",
      }}
    >
      <div className="nexa-container">
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
          <div className="nexa-badge">Nexafolio Support Hub</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFF", marginBottom: "16px" }}>
            How Can We Assist Your Portfolio?
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "32px" }}>
            Search documentation, troubleshooting guides, or create a priority ticket with our engineering team.
          </p>

          {/* Search Bar */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search guides: e.g. 'how is XIRR calculated', 'API authentication', 'margin rules'..."
              className="nexa-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                padding: "16px 20px 16px 48px",
                fontSize: "1.05rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-medium)",
              }}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-muted)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* Quick Filter Tags */}
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", fontSize: "0.82rem" }}>
            <span style={{ color: "var(--text-muted)" }}>Popular topics:</span>
            {quickLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(link)}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--accent-emerald-light)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  cursor: "pointer",
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
