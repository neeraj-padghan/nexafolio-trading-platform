import React from "react";
import { Link } from "react-router-dom";

function Education() {
  const learningModules = [
    {
      title: "Portfolio Attribution & Alpha",
      tag: "Fundamental Theory",
      desc: "Learn how modern quants break down total return into sector alpha, benchmark beta, and trading friction.",
    },
    {
      title: "Risk-Adjusted Return Metrics",
      tag: "Analytics 101",
      desc: "Demystifying Sharpe Ratio, Sortino Ratio, and maximum drawdown calculation for real-world portfolio resilience.",
    },
    {
      title: "Tax-Loss Harvesting Strategies",
      tag: "Capital Preservation",
      desc: "Legally and systematically offsetting taxable short-term capital gains using unrealized position losses.",
    },
  ];

  return (
    <section className="nexa-section">
      <div className="nexa-container">
        <div className="nexa-section-header">
          <div className="nexa-badge">Knowledge Hub</div>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
            Invest With Clarity. Learn From Quants.
          </h2>
          <p className="nexa-subheading">
            Access our open-access curriculum on portfolio theory, asset allocation modeling, and risk management.
          </p>
        </div>

        <div className="nexa-grid-3">
          {learningModules.map((item, idx) => (
            <div key={idx} className="nexa-card">
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "var(--accent-teal)",
                  background: "rgba(20, 184, 166, 0.12)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                {item.tag}
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#FFF", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "20px" }}>
                {item.desc}
              </p>
              <Link to="/support" style={{ fontSize: "0.88rem", fontWeight: 600 }}>
                Read Guide &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
