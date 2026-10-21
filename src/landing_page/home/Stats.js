import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  const features = [
    {
      title: "Real-Time Valuation Engine",
      description:
        "Instant mark-to-market valuations computed dynamically across all your active holdings, positions, and cash reserves without manual refresh.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
    },
    {
      title: "Deterministic P&L Attribution",
      description:
        "Separate unrealized market appreciation from realized trade gains with weighted average cost calculations and zero rounding drift.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
    },
    {
      title: "Simulated Order Execution",
      description:
        "Practice quantitative portfolio rebalancing and trade execution with our built-in simulator connecting watchlists directly to order books.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      title: "Multi-Asset Class Support",
      description:
        "Organize equities, mutual funds, sovereign gold bonds (SGB), and intraday positions in unified or segregated asset hierarchies.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="nexa-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="nexa-container">
        <div className="nexa-section-header">
          <div className="nexa-badge">Platform Pillars</div>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "16px" }}>
            Engineered For Precision & Financial Clarity
          </h2>
          <p className="nexa-subheading">
            Nexafolio replaces clunky spreadsheets and opaque brokerage summaries with an institutional-grade portfolio command center.
          </p>
        </div>

        <div className="nexa-grid-4">
          {features.map((item, idx) => (
            <div key={idx} className="nexa-card">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(255, 255, 255, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "#FFF" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link to="/product" className="nexa-btn nexa-btn-outline">
            Explore All Platform Features &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Stats;
