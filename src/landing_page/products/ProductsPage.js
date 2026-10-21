import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <main>
      <Hero />
      <LeftSection
        productName="Nexafolio Portfolio Terminal"
        productDescription="Our high-speed flagship portfolio dashboard with real-time mark-to-market valuations, dynamic asset allocation visualizations, interactive order simulators, and instant execution logging."
        badgeText="Core Engine"
        visualBadge="Terminal 2.0"
        accentColor="#10B981"
        specs={["Live Multi-Asset Tracking", "Instant Order Execution", "Watchlist Aggregation", "P&L Attribution"]}
        ctaLink="http://localhost:3001"
        ctaText="Launch Live Terminal →"
      />
      <RightSection
        productName="Nexafolio Portfolio Studio"
        productDescription="Deep-dive analytics for long-term investors. Analyze sector concentration, calculate true money-weighted returns (MWRR/IRR), and inspect historical drawdown curves."
        badgeText="Analytics & Insights"
        visualBadge="Studio v1.4"
        accentColor="#3B82F6"
        specs={["Sector Concentration Heatmaps", "Factor Attribution", "Drawdown Curves", "Sharpe & Sortino Metrics"]}
        ctaLink="http://localhost:3001/holdings"
        ctaText="Explore Analytics →"
      />
      <LeftSection
        productName="Nexafolio Yield & SGB Manager"
        productDescription="Optimize passive cash reserves and fixed-income portfolios. Track Sovereign Gold Bonds (SGB), dividend reinvestment milestones, and liquid yield reserves in one unified ledger."
        badgeText="Capital Preservation"
        visualBadge="Yield Engine"
        accentColor="#F59E0B"
        specs={["SGB Valuation Model", "Dividend Yield Tracker", "Cash Flow Forecaster", "Inflation Protection"]}
        ctaLink="http://localhost:3001/funds"
        ctaText="Inspect Yield Allocator →"
      />
      <RightSection
        productName="Nexafolio Connect Engine"
        productDescription="Developer-first RESTful API and WebSocket pipelines. Export structured JSON portfolio snapshots, stream real-time price updates, and trigger automated rebalancing strategies."
        badgeText="Developer API"
        visualBadge="REST / JSON API"
        accentColor="#8B5CF6"
        specs={["REST Endpoints", "WebSocket Feed", "Zero Ingestion Delay", "Automated Webhooks"]}
        ctaLink="http://localhost:3002"
        ctaText="Inspect Backend API →"
      />
      <Universe />
    </main>
  );
}

export default ProductsPage;
