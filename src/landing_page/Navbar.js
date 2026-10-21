import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NexafolioLogo = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: "middle" }}
  >
    <rect width="32" height="32" rx="8" fill="#0D1A30" />
    <path
      d="M7 23L13 14L18 19L25 9"
      stroke="#10B981"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="9" r="2.5" fill="#34D399" />
    <path
      d="M7 25H25"
      stroke="#1E3A5F"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(8, 12, 22, 0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "all var(--transition-fast)",
      }}
    >
      <div
        className="nexa-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "74px",
        }}
      >
        {/* Brand Logo & Wordmark */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <NexafolioLogo size={32} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Nexa<span style={{ color: "var(--accent-emerald)" }}>folio</span>
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Portfolio Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            gap: "28px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          <Link
            to="/"
            style={{
              fontSize: "0.92rem",
              fontWeight: 500,
              color: isActive("/") ? "var(--accent-emerald)" : "var(--text-secondary)",
              transition: "color var(--transition-fast)",
            }}
          >
            Overview
          </Link>
          <Link
            to="/product"
            style={{
              fontSize: "0.92rem",
              fontWeight: 500,
              color: isActive("/product") ? "var(--accent-emerald)" : "var(--text-secondary)",
              transition: "color var(--transition-fast)",
            }}
          >
            Products
          </Link>
          <Link
            to="/pricing"
            style={{
              fontSize: "0.92rem",
              fontWeight: 500,
              color: isActive("/pricing") ? "var(--accent-emerald)" : "var(--text-secondary)",
              transition: "color var(--transition-fast)",
            }}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            style={{
              fontSize: "0.92rem",
              fontWeight: 500,
              color: isActive("/about") ? "var(--accent-emerald)" : "var(--text-secondary)",
              transition: "color var(--transition-fast)",
            }}
          >
            About
          </Link>
          <Link
            to="/support"
            style={{
              fontSize: "0.92rem",
              fontWeight: 500,
              color: isActive("/support") ? "var(--accent-emerald)" : "var(--text-secondary)",
              transition: "color var(--transition-fast)",
            }}
          >
            Support
          </Link>
        </nav>

        {/* Right Action CTA Buttons */}
        <div
          style={{ display: "none", alignItems: "center", gap: "14px" }}
          className="desktop-actions"
        >
          <Link
            to="/signup"
            className="nexa-btn nexa-btn-secondary nexa-btn-sm"
            style={{ fontSize: "0.88rem" }}
          >
            Sign Up
          </Link>
          <a
            href="http://localhost:3001"
            className="nexa-btn nexa-btn-primary nexa-btn-sm"
            style={{ fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <span>Launch Dashboard</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "#FFF",
              transition: "all 0.2s",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "#FFF",
              transition: "all 0.2s",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "#FFF",
              transition: "all 0.2s",
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            borderBottom: "1px solid var(--border-medium)",
            padding: "20px 24px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-primary)", fontWeight: 500 }}
          >
            Overview
          </Link>
          <Link
            to="/product"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-primary)", fontWeight: 500 }}
          >
            Products
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-primary)", fontWeight: 500 }}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-primary)", fontWeight: 500 }}
          >
            About
          </Link>
          <Link
            to="/support"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-primary)", fontWeight: 500 }}
          >
            Support
          </Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="nexa-btn nexa-btn-secondary"
            >
              Sign Up
            </Link>
            <a
              href="http://localhost:3001"
              className="nexa-btn nexa-btn-primary"
            >
              Launch Dashboard
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
