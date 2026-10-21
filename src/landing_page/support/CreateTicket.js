import React, { useState } from "react";

function CreateTicket() {
  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    category: "Portfolio Analytics & P&L",
    priority: "Normal",
    subject: "",
    description: "",
  });
  const [submittedId, setSubmittedId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = "NX-" + Math.floor(1000 + Math.random() * 9000);
    setSubmittedId(randomId);
  };

  const categories = [
    {
      title: "Portfolio Analytics & P&L",
      desc: "Questions about mark-to-market prices, weighted average calculations, or tax-lot attribution.",
      icon: "📊",
    },
    {
      title: "Order Simulator & Execution",
      desc: "Issues with simulated buy/sell orders, margin deductions, or trade log synchronization.",
      icon: "⚡",
    },
    {
      title: "Developer API & Webhooks",
      desc: "Assistance with REST API endpoints, WebSocket feeds, or custom algorithmic integrations.",
      icon: "🔌",
    },
    {
      title: "Account Security & Preferences",
      desc: "Managing credentials, session timeouts, and display preferences.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="nexa-section">
      <div className="nexa-container">
        {/* Support Category Cards */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.8rem", color: "#FFF", marginBottom: "24px", textAlign: "center" }}>
            Browse Help Categories
          </h2>

          <div className="nexa-grid-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="nexa-card"
                style={{ cursor: "pointer" }}
                onClick={() => setTicketData({ ...ticketData, category: cat.title })}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{cat.icon}</div>
                <h3 style={{ fontSize: "1.1rem", color: "#FFF", marginBottom: "8px" }}>{cat.title}</h3>
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Ticket Submission Form */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-medium)",
            borderRadius: "var(--radius-xl)",
            padding: "40px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div style={{ marginBottom: "28px" }}>
            <div className="nexa-badge">Direct Support Request</div>
            <h2 style={{ fontSize: "1.7rem", color: "#FFF", marginBottom: "8px" }}>
              Submit an Engineering Ticket
            </h2>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
              Our systems team monitors inquiries around the clock. Typical response latency is &lt; 2 hours.
            </p>
          </div>

          {submittedId ? (
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "var(--accent-emerald-dim)",
                  border: "1px solid var(--accent-emerald)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-emerald)",
                  fontSize: "1.8rem",
                  marginBottom: "16px",
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: "1.3rem", color: "#FFF", marginBottom: "8px" }}>
                Ticket #{submittedId} Created!
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                A confirmation has been logged. Our quantitative support team will review your inquiry shortly.
              </p>
              <button
                onClick={() => {
                  setSubmittedId(null);
                  setTicketData({
                    name: "",
                    email: "",
                    category: "Portfolio Analytics & P&L",
                    priority: "Normal",
                    subject: "",
                    description: "",
                  });
                }}
                className="nexa-btn nexa-btn-secondary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label className="nexa-label">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Smith"
                    className="nexa-input"
                    value={ticketData.name}
                    onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="nexa-label">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@domain.com"
                    className="nexa-input"
                    value={ticketData.email}
                    onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "16px" }}>
                <div>
                  <label className="nexa-label">Category</label>
                  <select
                    className="nexa-select"
                    value={ticketData.category}
                    onChange={(e) => setTicketData({ ...ticketData, category: e.target.value })}
                  >
                    <option value="Portfolio Analytics & P&L">Portfolio Analytics & P&L</option>
                    <option value="Order Simulator & Execution">Order Simulator & Execution</option>
                    <option value="Developer API & Webhooks">Developer API & Webhooks</option>
                    <option value="Account Security & Preferences">Account Security & Preferences</option>
                  </select>
                </div>
                <div>
                  <label className="nexa-label">Priority</label>
                  <select
                    className="nexa-select"
                    value={ticketData.priority}
                    onChange={(e) => setTicketData({ ...ticketData, priority: e.target.value })}
                  >
                    <option value="Low">Low (Informational)</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High (Calculation issue)</option>
                    <option value="Urgent">Urgent (API / outage)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="nexa-label">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Summary of your question or issue"
                  className="nexa-input"
                  value={ticketData.subject}
                  onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="nexa-label">Description / Log details</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide context, holding symbol, or steps to reproduce..."
                  className="nexa-textarea"
                  value={ticketData.description}
                  onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="nexa-btn nexa-btn-primary"
                style={{ width: "100%", padding: "14px", marginTop: "10px" }}
              >
                Submit Support Ticket
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
