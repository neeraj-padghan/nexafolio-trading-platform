import React from "react";

function RightSection({
  productName,
  productDescription,
  badgeText,
  specs = [],
  ctaLink = "http://localhost:3001",
  ctaText = "Explore Capability →",
  visualBadge = "Module Suite",
  accentColor = "#3B82F6",
}) {
  return (
    <div style={{ padding: "48px 0" }}>
      <div className="nexa-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="nexa-grid-2"
        >
          {/* Text Description */}
          <div>
            {badgeText && (
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: accentColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                {badgeText}
              </span>
            )}
            <h2 style={{ fontSize: "2.1rem", color: "#FFF", marginBottom: "16px", lineHeight: "1.2" }}>
              {productName}
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "28px" }}>
              {productDescription}
            </p>

            <a
              href={ctaLink}
              className="nexa-btn nexa-btn-secondary"
            >
              {ctaText}
            </a>
          </div>

          {/* Visual Presentation Card */}
          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-medium)",
              padding: "36px",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: accentColor,
                  background: `${accentColor}1A`,
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  border: `1px solid ${accentColor}4D`,
                }}
              >
                {visualBadge}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                latency &lt; 15ms
              </span>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", marginBottom: "16px" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Engine Architecture</span>
              <h4 style={{ fontSize: "1.3rem", color: "#FFF", marginTop: "4px" }}>{productName}</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "6px" }}>
                {productDescription}
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {specs.map((spec, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  ✓ {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
