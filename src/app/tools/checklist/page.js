import Checklist from "../../../components/Checklist";

export default function ChecklistPage() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">Interactive Evaluation</span>
        <h2>Workplace Data Hygiene Checker</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div>
          <p className="lead-text">
            Under India's DPDP Act, digital data safety and compliance are mandatory workplace requirements for everyone handling personal records.
          </p>
          <p style={{ marginBottom: "24px", color: "#555555" }}>
            This evaluation tool is mapped against the compulsory **IAS/N9004** standard of the Data Protection Officer (DPO) Qualification Pack.
          </p>

          <div className="guideline-card">
            <h5>
              <i className="fa-solid fa-circle-exclamation"></i> Critical Hazards to Avoid
            </h5>
            <p>
              Under no circumstances should you engage in any of the following processing violations:
            </p>
            <ul style={{ paddingLeft: "16px", marginBottom: "0" }}>
              <li style={{ marginBottom: "8px", fontSize: "13px" }}>
                Sharing customer or employee directories casually without authorization.
              </li>
              <li style={{ marginBottom: "8px", fontSize: "13px" }}>
                Leaving laptops, mobile terminals, or print logs unlocked in open areas.
              </li>
              <li style={{ marginBottom: "0", fontSize: "13px" }}>
                Storing sensitive fiduciaries (PAN, Aadhaar, bank credentials) in unencrypted note files or messaging chats.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Checklist />
        </div>
      </div>
    </div>
  );
}
