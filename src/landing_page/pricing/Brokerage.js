import React from "react";

function Brokerage() {
  return (
    <section className="nexa-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="nexa-container">
        <div className="nexa-card">
          <div style={{ marginBottom: "28px" }}>
            <div className="nexa-badge">Fee Schedule & Cost Basis</div>
            <h2 style={{ fontSize: "1.8rem", color: "#FFF", marginBottom: "8px" }}>
              How Nexafolio Accounts For Trading Friction
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
              Accurate portfolio management requires understanding all statutory and regulatory deductions affecting net portfolio returns.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ fontSize: "1.1rem", color: "#FFF", marginBottom: "10px" }}>Securities Transaction Tax (STT)</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Tax by the government when transacting on exchanges. Charged at 0.1% on buy & sell for equity delivery, and 0.025% on sell for intraday equity trades.
              </p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ fontSize: "1.1rem", color: "#FFF", marginBottom: "10px" }}>Exchange Turnover & SEBI Charges</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Exchange turnover fees (NSE: 0.00297%, BSE: 0.00375%) plus regulatory fees of ₹10 per crore charged by SEBI for maintaining market integrity.
              </p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ fontSize: "1.1rem", color: "#FFF", marginBottom: "10px" }}>Depository Participant (DP) Charges</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Charged per scrip (irrespective of quantity) when stocks are sold from your Demat account (CDSL/NSDL charge of ₹13.50 + GST).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;
