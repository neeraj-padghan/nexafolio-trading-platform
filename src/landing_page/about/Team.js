import React from "react";

function Team() {
  const teamMembers = [
    {
      name: "Devin Vance",
      role: "Founder & Chief Architect",
      bio: "Quantitative finance researcher and systems engineer with 8+ years experience designing low-latency trade routing and portfolio attribution engines.",
      initials: "DV",
      color: "#10B981",
    },
    {
      name: "Elena Rostova",
      role: "Head of Quantitative Analytics",
      bio: "Specializes in multi-asset factor models, risk attribution algorithms, and stochastic volatility modeling for liquid assets.",
      initials: "ER",
      color: "#3B82F6",
    },
    {
      name: "Marcus Thorne",
      role: "Lead Full-Stack Engineer",
      bio: "Focuses on high-performance React architectures, real-time data streaming pipelines, and secure financial state synchronization.",
      initials: "MT",
      color: "#8B5CF6",
    },
  ];

  return (
    <section className="nexa-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="nexa-container">
        <div className="nexa-section-header">
          <div className="nexa-badge">Leadership & Engineering</div>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "16px" }}>
            The Minds Behind Nexafolio
          </h2>
          <p className="nexa-subheading">
            A specialized team of quantitative technologists, software architects, and product designers.
          </p>
        </div>

        <div className="nexa-grid-3">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="nexa-card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${member.color}33 0%, ${member.color}11 100%)`,
                  border: `2px solid ${member.color}`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: member.color,
                  marginBottom: "20px",
                }}
              >
                {member.initials}
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#FFF", marginBottom: "6px" }}>
                {member.name}
              </h3>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--accent-emerald)",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                {member.role}
              </span>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
