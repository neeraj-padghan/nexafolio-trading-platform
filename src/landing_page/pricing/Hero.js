import React from "react";

function Hero() {
  return (
    <section className="nexa-section" style={{ paddingBottom: "30px" }}>
      <div className="nexa-container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px auto" }}>
          <div className="nexa-badge">Transparent Value</div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", marginBottom: "18px", lineHeight: "1.2" }}>
            Simple, Honest Pricing For Every Portfolio
          </h1>
          <p className="nexa-subheading" style={{ fontSize: "1.15rem" }}>
            No hidden account maintenance fees, no surprise trading platform markups. What you see is exactly what you get.
          </p>
        </div>

        <div className="nexa-grid-3">
          <div className="nexa-card" style={{ textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--accent-emerald-dim)",
                border: "1px solid var(--accent-emerald)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-emerald)",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              ₹0
            </div>
            <h3 style={{ fontSize: "1.3rem", color: "#FFF", marginBottom: "8px" }}>
              Free Core Tracking
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Full portfolio tracking across equities, mutual funds, and sovereign gold bonds. Mark-to-market valuations and trade simulation included forever at zero fee.
            </p>
          </div>

          <div className="nexa-card" style={{ textAlign: "center", borderColor: "var(--accent-emerald)" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(59, 130, 246, 0.15)",
                border: "1px solid #3B82F6",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3B82F6",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Pro
            </div>
            <h3 style={{ fontSize: "1.3rem", color: "#FFF", marginBottom: "8px" }}>
              Institutional Analytics
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Factor risk attribution, Sharpe ratios, tax-lot optimization, and historical drawdown curve visualizations for serious wealth accumulators.
            </p>
          </div>

          <div className="nexa-card" style={{ textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(245, 158, 11, 0.15)",
                border: "1px solid #F59E0B",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F59E0B",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              API
            </div>
            <h3 style={{ fontSize: "1.3rem", color: "#FFF", marginBottom: "8px" }}>
              Algorithmic Connect
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Dedicated programmatic REST and WebSocket endpoints, webhooks for automatic rebalancing triggers, and multi-broker ingestion pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
