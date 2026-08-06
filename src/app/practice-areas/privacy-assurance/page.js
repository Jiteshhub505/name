import Link from "next/link";

export default function PrivacyAssurance() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">Practice Areas</span>
        <h2>Privacy Assurance & Maturity</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div className="modal-bio-body">
          <p className="lead-text">
            Aligns with standard **IAS/N8084**. This practice area focuses on establishing continuous auditing, monitoring performance metrics, and driving maturity roadmaps for long-term data protection.
          </p>

          <h4>Core Elements & Working Scope</h4>
          <ul>
            <li>
              <strong>Audit Coordination:</strong> Scheduling internal and external audits, classifying observations, identifying root causes, and managing Corrective and Preventive Action (CAPA) plans.
            </li>
            <li>
              <strong>Maturity Assessments:</strong> Defining organizational capability parameters (dimensions, criteria, scoring mechanisms) and benchmarking practices.
            </li>
            <li>
              <strong>Awareness & Training Governance:</strong> Defining role-based training matrices (HR, IT, Customer-facing teams, Management), drafting content, and evaluating competency gaps.
            </li>
            <li>
              <strong>Performance Monitoring:</strong> Tracking privacy performance indicators, such as incident trends, audit findings, compliance metrics, and training completions.
            </li>
          </ul>

          <h4 style={{ marginTop: "40px" }}>Key Recommended Practices</h4>
          <p>
            Maturity is a journey, not a checkbox. CDDPP recommends conducting annual **Privacy Maturity Audits** and executing structured role-based training programs. Maintaining an active **CAPA Register** is critical to demonstrate continuous regulatory compliance.
          </p>
        </div>

        <div style={{ position: "sticky", top: "120px" }}>
          <div className="compulsory-nos-badge" style={{ backgroundColor: "#f8f9fa", border: "1px solid var(--border-color)", padding: "30px", borderRadius: "var(--border-radius-lg)" }}>
            <h4 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-blue)" }}>Assurance Artifacts</h4>
            <ul className="check-list" style={{ paddingLeft: "0", listStyle: "none", marginBottom: "24px" }}>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>CAPA Registers</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Maturity Scorecards</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Training Matrices</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Audit Trend Metrics</li>
            </ul>
            <Link href="/contact" className="btn btn-primary full-width" style={{ fontSize: "12px" }}>
              Schedule a Maturity Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
