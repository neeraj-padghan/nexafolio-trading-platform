import React from "react";

function Awards() {
  const allocationHighlights = [
    { name: "Large Cap Blue-Chips", weight: "38%", status: "Balanced", color: "#10B981" },
    { name: "Mid-Cap Growth Tech", weight: "24%", status: "Outperforming", color: "#3B82F6" },
    { name: "Sovereign Gold Bonds", weight: "12%", status: "Defensive", color: "#F59E0B" },
    { name: "Banking & Financials", weight: "14%", status: "Core Yield", color: "#8B5CF6" },
    { name: "Cash & Liquid Margin", weight: "12%", status: "Tactical Buffer", color: "#14B8A6" },
  ];

  return (
    <section className="nexa-section">
      <div className="nexa-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="nexa-grid-2"
        >
          {/* Left Column: Asset Allocation Overview */}
          <div>
            <div className="nexa-badge">Asset Intelligence</div>
            <h2 style={{ fontSize: "2.3rem", lineHeight: "1.2", marginBottom: "18px" }}>
              Dynamic Portfolio Allocation & Exposure Analytics
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "24px", lineHeight: "1.7" }}>
              Visualizing concentration risk is critical to preserving capital. Nexafolio categorizes your investments by asset class, industry sector, and risk profile so you never over-concentrate without realizing it.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ color: "var(--accent-emerald)", fontSize: "1.2rem", fontWeight: 700 }}>✓</span>
                <div>
                  <h4 style={{ fontSize: "1rem", color: "#FFF" }}>Automatic Concentration Thresholds</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                    Flags when any individual equity holding exceeds your target risk parameter.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ color: "var(--accent-emerald)", fontSize: "1.2rem", fontWeight: 700 }}>✓</span>
                <div>
                  <h4 style={{ fontSize: "1rem", color: "#FFF" }}>Tax-Lot Optimization</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                    Differentiates long-term capital holdings from short-term speculative intraday positions.
                  </p>
                </div>
              </div>
            </div>

            <a href="http://localhost:3001" className="nexa-btn nexa-btn-primary">
              View Your Live Holdings &rarr;
            </a>
          </div>

          {/* Right Column: Visual Breakdown Card */}
          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-medium)",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <h4 style={{ fontSize: "1.1rem", color: "#FFF" }}>Sample Allocation Health</h4>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Target vs. Current Weight</span>
              </div>
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--accent-emerald)",
                  background: "var(--accent-emerald-dim)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                Optimal Diversification
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {allocationHighlights.map((item, index) => (
                <div key={index} style={{ background: "rgba(255, 255, 255, 0.02)", padding: "14px 18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text-primary)" }}>{item.name}</span>
                    <span style={{ fontSize: "0.92rem", fontWeight: 700, color: item.color }}>{item.weight}</span>
                  </div>
                  <div style={{ height: "6px", width: "100%", background: "rgba(255, 255, 255, 0.06)", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: item.weight, backgroundColor: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
