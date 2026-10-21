import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  const tiers = [
    {
      name: "Community Portfolio",
      price: "₹0",
      period: "forever free",
      desc: "Ideal for retail investors and students getting started with portfolio tracking.",
      features: [
        "Up to 50 active stock & ETF holdings",
        "Real-time mark-to-market valuation",
        "Basic P&L and cost-basis tracking",
        "Simulated order placement (buy/sell)",
        "Daily automated EOD reconciliation",
      ],
      isPopular: false,
      cta: "Get Started Free",
      href: "/signup",
    },
    {
      name: "Investor Pro",
      price: "₹499",
      period: "per month",
      desc: "For serious wealth builders demanding advanced analytics and sector intelligence.",
      features: [
        "Unlimited holdings & multi-portfolios",
        "Real-time volatility & risk attribution",
        "Tax-loss harvesting opportunity detector",
        "Historical CAGR and benchmark comparison",
        "Export to CSV, Excel, and JSON reports",
        "Priority simulation execution",
      ],
      isPopular: true,
      cta: "Start 14-Day Pro Trial",
      href: "/signup",
    },
    {
      name: "Quant & API Studio",
      price: "₹1,499",
      period: "per month",
      desc: "Tailored for quantitative traders, family offices, and automated rebalancers.",
      features: [
        "Direct REST API & WebSocket stream",
        "Algorithmic rebalancing webhooks",
        "Custom risk models & Monte Carlo simulator",
        "Institutional multi-broker order router",
        "Dedicated account manager",
      ],
      isPopular: false,
      cta: "Contact Enterprise",
      href: "/support",
    },
  ];

  return (
    <section className="nexa-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="nexa-container">
        <div className="nexa-section-header">
          <div className="nexa-badge">Predictable Pricing</div>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
            Transparent Plans. Zero Hidden Commissions.
          </h2>
          <p className="nexa-subheading">
            Choose the tier that matches your investing scale. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="nexa-grid-3">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`nexa-card ${tier.isPopular ? "nexa-card-elevated" : ""}`}
              style={{
                borderColor: tier.isPopular ? "var(--accent-emerald)" : "var(--border-subtle)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {tier.isPopular && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "var(--accent-emerald)",
                    color: "#080C16",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <h3 style={{ fontSize: "1.3rem", color: "#FFF", marginBottom: "8px" }}>
                  {tier.name}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                  {tier.desc}
                </p>

                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "#FFF" }}>{tier.price}</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>/ {tier.period}</span>
                </div>

                <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "20px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase" }}>
                    Included Capabilities:
                  </span>
                  <ul style={{ listStyle: "none", padding: 0, marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: "var(--accent-emerald)", fontWeight: 700 }}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to={tier.href}
                className={`nexa-btn ${tier.isPopular ? "nexa-btn-primary" : "nexa-btn-secondary"}`}
                style={{ width: "100%" }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
