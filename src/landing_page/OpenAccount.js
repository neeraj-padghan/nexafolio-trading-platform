import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="nexa-section" style={{ paddingTop: 0 }}>
      <div className="nexa-container">
        <div
          style={{
            background: "linear-gradient(135deg, #131E35 0%, #0E1729 100%)",
            border: "1px solid var(--border-medium)",
            borderRadius: "var(--radius-xl)",
            padding: "64px 32px",
            textAlign: "center",
            boxShadow: "var(--shadow-lg)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "18px", color: "#FFF" }}>
            Ready to Take Control of Your Portfolio?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 36px auto",
              lineHeight: "1.6",
            }}
          >
            Join modern investors tracking multi-asset portfolios with institutional precision. Experience the live Nexafolio terminal today.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
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
              style={{ fontSize: "1rem", padding: "14px 28px" }}
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
