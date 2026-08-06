import Link from "next/link";

export default function EnterpriseGovernance() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">Practice Areas</span>
        <h2>Enterprise Privacy Governance</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div className="modal-bio-body">
          <p className="lead-text">
            Aligns with standard **IAS/N8081**. This practice area focuses on defining enterprise-level privacy governance models, assigning accountability structures, and building robust policy frameworks.
          </p>
          
          <h4>Core Elements & Working Scope</h4>
          <ul>
            <li>
              <strong>Governance Model Definition:</strong> Designing centralized or decentralized governance models, establishing reporting structures, authority boundaries, and data committees.
            </li>
            <li>
              <strong>Roles & Accountabilities:</strong> Defining clear responsibilities for the Data Protection Officer (DPO), departmental privacy coordinators, data owners, data custodians, and data processors.
            </li>
            <li>
              <strong>Policy Formulation:</strong> Drafting enterprise privacy policies, consent handling guidelines, retention and deletion schedules, and grievance procedure documentation.
            </li>
            <li>
              <strong>Operational Controls:</strong> Defining approval hierarchies, logging requirements, authorization reviews, and version controls for consent records.
            </li>
          </ul>

          <h4 style={{ marginTop: "40px" }}>Key Recommended Practices</h4>
          <p>
            An effective privacy program must start with an explicit charter approved by the board. CDDPP recommends maintaining an active **Data Ownership Register** and executing structured **RACI Matrices** for all processing systems containing personal identifiers.
          </p>
        </div>

        <div style={{ position: "sticky", top: "120px" }}>
          <div className="compulsory-nos-badge" style={{ backgroundColor: "#f8f9fa", border: "1px solid var(--border-color)", padding: "30px", borderRadius: "var(--border-radius-lg)" }}>
            <h4 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-blue)" }}>Governance Artifacts</h4>
            <ul className="check-list" style={{ paddingLeft: "0", listStyle: "none", marginBottom: "24px" }}>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Privacy Charters</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>RACI Matrices</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Consent SOPs</li>
              <li style={{ fontSize: "13px", marginBottom: "8px" }}>Processor Contracts</li>
            </ul>
            <Link href="/contact" className="btn btn-primary full-width" style={{ fontSize: "12px" }}>
              Inquire About Audits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
