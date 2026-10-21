import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const integrations = [
    {
      name: "Broker Ingestion Gateway",
      desc: "Connect seamlessly with NSE/BSE brokers via standardized JSON import or Kite/Interactive Brokers bridge.",
      badge: "Connectivity",
    },
    {
      name: "Tax-Harvesting Sentinel",
      desc: "Automated scans identify unrealized losses available to offset capital gains before financial year-end.",
      badge: "Compliance",
    },
    {
      name: "Portfolio Rebalancing Bot",
      desc: "Algorithmically calculates required share quantities to re-align your current portfolio back to target weights.",
      badge: "Automation",
    },
    {
      name: "Institutional Risk Monitor",
      desc: "Real-time Value at Risk (VaR), beta sensitivity against benchmark indices, and maximum expected drawdown.",
      badge: "Risk Engine",
    },
  ];

  return (
    <section className="nexa-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="nexa-container">
        <div className="nexa-section-header">
          <div className="nexa-badge">Nexafolio Universe</div>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
            The Extended Ecosystem
          </h2>
          <p className="nexa-subheading">
            Powerful microservices and modular plugins designed to work alongside your core portfolio terminal.
          </p>
        </div>

        <div className="nexa-grid-4">
          {integrations.map((item, idx) => (
            <div key={idx} className="nexa-card">
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent-teal)",
                  background: "rgba(20, 184, 166, 0.12)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  display: "inline-block",
                  marginBottom: "14px",
                }}
              >
                {item.badge}
              </span>
              <h3 style={{ fontSize: "1.15rem", color: "#FFF", marginBottom: "10px" }}>
                {item.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/signup" className="nexa-btn nexa-btn-primary" style={{ padding: "14px 32px" }}>
            Start Using Nexafolio Today
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Universe;
