import Link from "next/link";

export default function RiskCompliance() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">Practice Areas</span>
        <h2>Risk & Compliance Management</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div className="modal-bio-body">
          <p className="lead-text">
            Aligns with standard **IAS/N8082**. This area centers on identifying, assessing, and controlling privacy risks across all enterprise operational workflows and third-party data processing.
          </p>

          <h4>Core Elements & Working Scope</h4>
          <ul>
            <li>
              <strong>Data Protection Impact Assessments (DPIA):</strong> Building structured assessment criteria for high-risk operations, AI implementations, profiling, and automated decision-making.
            </li>
            <li>
              <strong>Data Flow Mapping:</strong> Identifying and diagramming collection points, storage coordinates, access pathways, third-party sharing, and archival systems.
            </li>
            <li>
              <strong>Control Safeguards Evaluation:</strong> Implementing technical safeguards (encryption, masking, access control lists) and process controls (consent verification logs, retention schedules).
            </li>
            <li>
              <strong>Incident & Breach Governance:</strong> Defining severity levels, escalation hierarchies, internal notification protocols, and containment procedures (system isolation, credentials reset).
            </li>
          </ul>

          <h4 style={{ marginTop: "40px" }}>Key Recommended Practices</h4>
          <p>
            CDDPP advocates for maintaining a dynamic, continually updated **Privacy Risk Register**. Turnkey processes must incorporate automated logging checks to verify consent validity before routing data to external processors.
          </p>
        </div>

        <div style={{ position: "sticky", top: "120px" }}>
          <div className="compulsory-nos-badge" style={{ backgroundColor: "#f8f9fa", border: "1px solid var(--border-color)", padding: "30px", borderRadius: "var(--border-radius-lg)" }}>
            <h4 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-blue)" }}>Risk Artifacts</h4>
            <ul className="check-list" style={{ paddingLeft: "0", listStyle: "none", marginBottom: "24px" }}>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>DPIA Reports</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Risk Registers</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Breach Log Files</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Consent Log Audits</li>
            </ul>
            <Link href="/contact" className="btn btn-primary full-width" style={{ fontSize: "12px" }}>
              Request DPIA templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
