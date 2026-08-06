export default function CoreValues() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">The Firm</span>
        <h2>Core Values</h2>
        <div className="header-line"></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", maxWidth: "800px" }}>
        <div>
          <p className="lead-text">
            The Council for Digital Data Protection and Privacy (CDDPP) is anchored by a set of core principles that govern our guidelines, training certifications, and advisory assignments.
          </p>
        </div>

        <div className="about-features-column responsive-grid-2">
          <div className="feat-box" style={{ flex: 1 }}>
            <div className="feat-icon" style={{ color: "var(--accent-blue)" }}><i className="fa-solid fa-gavel"></i></div>
            <div className="feat-info">
              <h3>Adjudicative Integrity</h3>
              <p>Drawing on deep tribunal experience to construct frameworks that uphold the principles of equity, natural justice, and statutory compliance.</p>
            </div>
          </div>

          <div className="feat-box" style={{ flex: 1 }}>
            <div className="feat-icon" style={{ color: "var(--accent-blue)" }}><i className="fa-solid fa-gears"></i></div>
            <div className="feat-info">
              <h3>System-Driven Governance</h3>
              <p>Designing operational procedures that function independently of individuals, utilizing rigorous RACI matrices, audits, and checklists.</p>
            </div>
          </div>

          <div className="feat-box" style={{ flex: 1 }}>
            <div className="feat-icon" style={{ color: "var(--accent-blue)" }}><i className="fa-solid fa-leaf"></i></div>
            <div className="feat-info">
              <h3>Environmental Responsibility</h3>
              <p>Ensuring that high-volume digital data structures operate efficiently, advocating for energy-saving computing and green data center architectures.</p>
            </div>
          </div>

          <div className="feat-box" style={{ flex: 1 }}>
            <div className="feat-icon" style={{ color: "var(--accent-blue)" }}><i className="fa-solid fa-flag"></i></div>
            <div className="feat-info">
              <h3>National Service</h3>
              <p>Fostering the 'Make in India' capacity building initiative by aligning corporate standards with national statutory requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
