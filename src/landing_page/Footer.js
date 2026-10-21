import React from "react";
import { Link } from "react-router-dom";
import { NexafolioLogo } from "./Navbar";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "64px",
        paddingBottom: "40px",
        marginTop: "80px",
      }}
    >
      <div className="nexa-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "50px",
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <NexafolioLogo size={30} />
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFF" }}>
                Nexa<span style={{ color: "var(--accent-emerald)" }}>folio</span>
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: "340px", lineHeight: "1.6" }}>
              Nexafolio is an institutional-grade portfolio management and wealth analytics platform. Built for modern investors, quants, and asset managers seeking real-time portfolio intelligence.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  color: "var(--accent-emerald)",
                  background: "var(--accent-emerald-dim)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-emerald)",
                  }}
                />
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "18px" }}>
              Platform
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <Link to="/product" style={{ color: "var(--text-secondary)" }}>Portfolio Dashboard</Link>
              <Link to="/product" style={{ color: "var(--text-secondary)" }}>Asset Allocation Engine</Link>
              <Link to="/product" style={{ color: "var(--text-secondary)" }}>Trade Simulator</Link>
              <Link to="/product" style={{ color: "var(--text-secondary)" }}>Risk & Yield Analytics</Link>
              <a href="http://localhost:3001" style={{ color: "var(--accent-emerald)" }}>Direct Dashboard &rarr;</a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "18px" }}>
              Resources
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <Link to="/pricing" style={{ color: "var(--text-secondary)" }}>Pricing Plans</Link>
              <Link to="/about" style={{ color: "var(--text-secondary)" }}>Architecture & Docs</Link>
              <Link to="/support" style={{ color: "var(--text-secondary)" }}>Help Center</Link>
              <Link to="/support" style={{ color: "var(--text-secondary)" }}>API Reference</Link>
              <Link to="/about" style={{ color: "var(--text-secondary)" }}>Engineering Blog</Link>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "18px" }}>
              Company
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <Link to="/about" style={{ color: "var(--text-secondary)" }}>About Nexafolio</Link>
              <Link to="/about" style={{ color: "var(--text-secondary)" }}>Leadership & Team</Link>
              <Link to="/signup" style={{ color: "var(--text-secondary)" }}>Create Account</Link>
              <Link to="/support" style={{ color: "var(--text-secondary)" }}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Notice */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            lineHeight: "1.7",
          }}
        >
          <p style={{ marginBottom: "12px" }}>
            <strong>Nexafolio Financial Technologies:</strong> Nexafolio is a software platform designed for personal investment portfolio tracking, asset allocation modeling, and quantitative financial management analysis. Simulated performance and order records are for demonstration and portfolio tracking purposes.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.04)",
              paddingTop: "16px",
            }}
          >
            <p style={{ color: "var(--text-faint)" }}>
              &copy; {new Date().getFullYear()} Nexafolio Technologies Inc. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "18px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Security Architecture</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
