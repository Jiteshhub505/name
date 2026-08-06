import Link from "next/link";

export default function RegulatoryInterface() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">Practice Areas</span>
        <h2>Regulatory & Stakeholder Interface</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div className="modal-bio-body">
          <p className="lead-text">
            Aligns with standard **IAS/N8083**. Upholds transparent channels of communication and liaison between the organization, data principals, and statutory regulators (Data Protection Board of India).
          </p>

          <h4>Core Elements & Working Scope</h4>
          <ul>
            <li>
              <strong>Regulatory Liaison:</strong> Establishing secure communication channels, preparing compliance declarations, managing notifications, and coordinating during inspections.
            </li>
            <li>
              <strong>Grievance Handling:</strong> Implementing user-friendly complaint intakes, defining escalation thresholds, workflow procedures, and response timelines.
            </li>
            <li>
              <strong>Data Principal Rights:</strong> Building systems to address principal requests, such as access queries, correction records, deletion requests, and consent withdrawals.
            </li>
            <li>
              <strong>Executive & Board Reporting:</strong> Communicating regulatory updates, compliance statuses, audit findings, and risk trend dashboards to senior board directors.
            </li>
          </ul>

          <h4 style={{ marginTop: "40px" }}>Key Recommended Practices</h4>
          <p>
            An organization must establish SLA-bound resolution paths for data principal complaints. CDDPP recommends maintaining an active, traceable **Grievance Register** and setting up automated ticket tracking systems to prevent regulatory exposure.
          </p>
        </div>

        <div style={{ position: "sticky", top: "120px" }}>
          <div className="compulsory-nos-badge" style={{ backgroundColor: "#f8f9fa", border: "1px solid var(--border-color)", padding: "30px", borderRadius: "var(--border-radius-lg)" }}>
            <h4 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-blue)" }}>Interface Artifacts</h4>
            <ul className="check-list" style={{ paddingLeft: "0", listStyle: "none", marginBottom: "24px" }}>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Grievance SOPs</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Grievance Registers</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Board Reports</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>SLA Reports</li>
            </ul>
            <Link href="/contact" className="btn btn-primary full-width" style={{ fontSize: "12px" }}>
              Consult on Grievances
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
