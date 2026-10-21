import React from "react";

function Hero() {
  return (
    <section className="nexa-section" style={{ paddingBottom: "40px" }}>
      <div className="nexa-container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px auto" }}>
          <div className="nexa-badge">About Nexafolio</div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", marginBottom: "20px", lineHeight: "1.2" }}>
            Pioneering Open, Data-Driven{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Wealth Intelligence
            </span>
          </h1>
          <p className="nexa-subheading" style={{ fontSize: "1.15rem" }}>
            We started Nexafolio with a conviction: individual investors deserve the same analytical horsepower, deterministic P&L attribution, and risk modeling that top hedge funds and institutional desks rely on.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "36px",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "48px",
          }}
          className="nexa-grid-2"
        >
          <div className="nexa-card">
            <h3 style={{ fontSize: "1.3rem", color: "#FFF", marginBottom: "16px" }}>
              The Problem With Traditional Brokerages
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "16px" }}>
              Most retail brokerage interfaces are built solely to generate transaction velocity. They bury risk metrics, obscure tax-lot cost basis, and provide superficial summaries that fail to explain what actually drove your portfolio's performance.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              Spreadsheets are manual and prone to formula errors. Standalone tracker apps often suffer from stale prices, security vulnerabilities, or opaque algorithms.
            </p>
          </div>

          <div className="nexa-card">
            <h3 style={{ fontSize: "1.3rem", color: "var(--accent-emerald-light)", marginBottom: "16px" }}>
              The Nexafolio Architectural Difference
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "16px" }}>
              Nexafolio decouples order execution simulation from portfolio intelligence. With dynamic mark-to-market pricing, automated asset allocation modeling, and instant order book synchronization, our users gain complete transparency.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              Every calculation — from weighted average purchase cost to unrealized gain — is transparent, verifiable, and backed by a modern full-stack architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
