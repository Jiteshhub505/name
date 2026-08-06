import Link from "next/link";

export default function DpoFramework() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">National Standards</span>
        <h2>Data Protection Officer (DPO) Standard</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div className="modal-bio-body">
          <p className="lead-text">
            CDDPP aligns with the Instrumentation Automation Surveillance & Communication (IASC) Sector Skill Council standard for the **Data Protection Officer (DPO) Qualification Pack (QP Code: IAS/Q8031, NSQF Level 7.5)**.
          </p>

          <p style={{ marginBottom: "24px" }}>
            The role involves enterprise-level governance, accountability, regulatory liaison, and strategic oversight. The Data Protection Officer (DPO) is responsible for end-to-end DPDP compliance, regulatory interface, and enterprise privacy governance.
          </p>

          <h4>Qualification Parameters</h4>
          <table className="dpo-table" style={{ border: "1px solid var(--border-color)", marginBottom: "32px" }}>
            <tbody>
              <tr>
                <td><strong>QP Code</strong></td>
                <td>IAS/Q8031</td>
              </tr>
              <tr>
                <td><strong>NSQF Level</strong></td>
                <td>7.5</td>
              </tr>
              <tr>
                <td><strong>Occupation</strong></td>
                <td>Data Privacy & Data Protection (DPDP)</td>
              </tr>
              <tr>
                <td><strong>Minimum Job Entry Age</strong></td>
                <td>28 Years</td>
              </tr>
              <tr>
                <td><strong>Educational Qualification</strong></td>
                <td>Bachelor’s degree in Engineering, Information Technology, Computer Science, Cyber Security, Law, Management, Information Systems or equivalent discipline.</td>
              </tr>
              <tr>
                <td><strong>Minimum Experience</strong></td>
                <td>8–12 years relevant exposure in one or more of: Information Security, IT Governance, Enterprise Risk Management, Regulatory Compliance, Corporate Governance, Legal, Internal Audit, Privacy Compliance.</td>
              </tr>
            </tbody>
          </table>

          <h4>Key Personal Attributes</h4>
          <p>
            This is a high-trust governance role requiring a combination of ethical judgment, regulatory discipline and systems thinking. Ability to perform cross-functional coordination and create organizational influence.
          </p>
        </div>

        <div style={{ position: "sticky", top: "120px" }}>
          <div className="compulsory-nos-badge" style={{ backgroundColor: "#f8f9fa", border: "1px solid var(--border-color)", padding: "30px", borderRadius: "var(--border-radius-lg)" }}>
            <h4 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-blue)" }}>Compulsory Standards (NOS)</h4>
            <ul style={{ paddingLeft: "0", listStyle: "none", marginBottom: "24px" }}>
              <li style={{ fontSize: "12.5px", marginBottom: "10px", lineHeight: "1.4" }}>
                <strong>IAS/N8081:</strong> Enterprise Privacy Governance
              </li>
              <li style={{ fontSize: "12.5px", marginBottom: "10px", lineHeight: "1.4" }}>
                <strong>IAS/N8082:</strong> Data Protection Risk & Compliance
              </li>
              <li style={{ fontSize: "12.5px", marginBottom: "10px", lineHeight: "1.4" }}>
                <strong>IAS/N8083:</strong> Regulatory & Stakeholder Interface
              </li>
              <li style={{ fontSize: "12.5px", marginBottom: "10px", lineHeight: "1.4" }}>
                <strong>IAS/N8084:</strong> Organizational Privacy Assurance
              </li>
              <li style={{ fontSize: "12.5px", marginBottom: "10px", lineHeight: "1.4" }}>
                <strong>IAS/N9004:</strong> Basic Data Responsibility at Workplace
              </li>
              <li style={{ fontSize: "12.5px", marginBottom: "10px", lineHeight: "1.4" }}>
                <strong>IAS/N9003:</strong> Health, Safety & Environment
              </li>
              <li style={{ fontSize: "12.5px", marginBottom: "10px", lineHeight: "1.4" }}>
                <strong>IAS/N9001:</strong> Work effectively with teams
              </li>
            </ul>
            <Link href="/contact" className="btn btn-primary full-width" style={{ fontSize: "12px" }}>
              Request DPO Syllabus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
