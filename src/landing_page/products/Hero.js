import React from "react";

function Hero() {
  return (
    <section className="nexa-section" style={{ paddingBottom: "40px" }}>
      <div className="nexa-container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <div className="nexa-badge">Platform Suite</div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", marginBottom: "18px", lineHeight: "1.2" }}>
            The Complete{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Wealth Engineering
            </span>{" "}
            Ecosystem
          </h1>
          <p className="nexa-subheading" style={{ fontSize: "1.15rem" }}>
            From real-time position tracking to automated algorithmic rebalancing, explore the specialized software modules powering Nexafolio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
