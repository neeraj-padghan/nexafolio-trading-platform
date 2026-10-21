import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section style={{ padding: "60px 0 80px 0", position: "relative", overflow: "hidden" }}>
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "350px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(20, 184, 166, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="nexa-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
          <div className="nexa-badge">
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-emerald)",
                display: "inline-block",
              }}
            />
            Nexafolio Platform 3.0 &bull; Intelligent Portfolio Management
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Master Your Wealth With Precision{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Portfolio Intelligence
            </span>
          </h1>

          <p
            className="nexa-subheading"
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.6,
              maxWidth: "680px",
              margin: "0 auto 36px auto",
            }}
          >
            Real-time multi-asset tracking, automated performance attribution, risk metrics, and order simulation built for modern investors and quantitative strategists.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "56px",
            }}
          >
            <a
              href="http://localhost:3001"
              className="nexa-btn nexa-btn-primary"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              <span>Launch Live Dashboard</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <Link
              to="/signup"
              className="nexa-btn nexa-btn-secondary"
              style={{ fontSize: "1rem", padding: "14px 30px" }}
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Live Interactive Portfolio Mockup Preview */}
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            background: "linear-gradient(180deg, #131E35 0%, #0D1424 100%)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-medium)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(16, 185, 129, 0.1)",
            overflow: "hidden",
            padding: "24px",
          }}
        >
          {/* Dashboard Window Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "16px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981" }} />
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                nexafolio-terminal // live-preview
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  color: "var(--accent-emerald)",
                  background: "var(--accent-emerald-dim)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-emerald)" }} />
                Active Session
              </span>
            </div>
          </div>

          {/* Metrics Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Total Portfolio Value</span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: "6px", color: "#FFF" }}>₹3,84,250.80</h3>
              <span style={{ fontSize: "0.82rem", color: "var(--profit)", fontWeight: 600 }}>+₹54,375.25 (+16.48%)</span>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Invested Capital</span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: "6px", color: "#FFF" }}>₹3,29,875.55</h3>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Across 13 core holdings</span>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Liquid Margin Available</span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: "6px", color: "var(--accent-emerald-light)" }}>₹24,043.10</h3>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Instant trade execution</span>
            </div>
          </div>

          {/* Asset Allocation & Performance Bar */}
          <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "16px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Multi-Asset Allocation Breakdown
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Target: Moderate Growth
              </span>
            </div>

            {/* Custom Multi-Color Allocation Bar */}
            <div
              style={{
                height: "12px",
                width: "100%",
                borderRadius: "6px",
                overflow: "hidden",
                display: "flex",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "62%", backgroundColor: "#10B981" }} title="Equities 62%" />
              <div style={{ width: "18%", backgroundColor: "#3B82F6" }} title="Cash & Equivalents 18%" />
              <div style={{ width: "12%", backgroundColor: "#F59E0B" }} title="Commodities & Gold 12%" />
              <div style={{ width: "8%", backgroundColor: "#8B5CF6" }} title="Fixed Income 8%" />
            </div>

            {/* Legend */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.78rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#10B981" }} />
                Equities (62%)
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#3B82F6" }} />
                Cash & Margin (18%)
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#F59E0B" }} />
                Commodities & SGB (12%)
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#8B5CF6" }} />
                Fixed Income (8%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
