import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <div className="nexa-card" style={{ maxWidth: "520px", padding: "48px 36px" }}>
        <div className="nexa-badge" style={{ color: "var(--loss)", borderColor: "rgba(244, 63, 94, 0.3)" }}>
          Error 404
        </div>
        <h1 style={{ fontSize: "2.4rem", color: "#FFF", marginBottom: "14px" }}>
          Portfolio Route Not Found
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "32px", lineHeight: "1.6" }}>
          The financial view or page you requested does not exist or may have been relocated.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link to="/" className="nexa-btn nexa-btn-primary">
            Back to Home
          </Link>
          <a href="http://localhost:3001" className="nexa-btn nexa-btn-secondary">
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
