import Link from "next/link";

export default function IndividualHygiene() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">National Standards</span>
        <h2>Individual Hygiene Standard (IAS/N9004)</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div className="modal-bio-body">
          <p className="lead-text">
            Aligns with standard **IAS/N9004**. This standard defines responsibilities for data handling as an individual, establishing basic workplace digital hygiene for staff, professionals, and technicians.
          </p>

          <p style={{ marginBottom: "30px" }}>
            The core golden concept: <strong>"If the data belongs to a person, I am only allowed to use it for the purpose it was given."</strong> Everything else flows from this principle.
          </p>

          <h4>The Five Golden Rules to Follow</h4>
          <ul>
            <li>
              <strong>Rule 1: Take data only if needed.</strong> Do not collect extra phone numbers or unnecessary personal details. Ask yourself, <em>"Do I really need this to do my job?"</em>
            </li>
            <li>
              <strong>Rule 2: Tell the person why you are taking it.</strong> Say it in simple, non-legal language (e.g., "We need your number to send invoices" or "This is for service updates").
            </li>
            <li>
              <strong>Rule 3: Use data only for the stated purpose.</strong> Never use customer numbers for unauthorized marketing or share databases casually.
            </li>
            <li>
              <strong>Rule 4: Keep data reasonably safe.</strong> Lock your phone/laptop, never share devices with unknown persons, and do not store sensitive details (Aadhaar, PAN) in open applications.
            </li>
            <li>
              <strong>Rule 5: Delete when data is not needed.</strong> Clean your directories, remove old customer spreadsheets, and avoid keeping everything forever.
            </li>
          </ul>

          <h4 style={{ marginTop: "40px" }}>Five Critical Violations (Never Do)</h4>
          <ul className="check-list" style={{ paddingLeft: "0", listStyle: "none" }}>
            <li style={{ fontSize: "14px", marginBottom: "8px", color: "#cc0000" }}>Never share customer/client data without explicit permission.</li>
            <li style={{ fontSize: "14px", marginBottom: "8px", color: "#cc0000" }}>Never sell or forward contact lists.</li>
            <li style={{ fontSize: "14px", marginBottom: "8px", color: "#cc0000" }}>Never store data on personal unencrypted apps without need.</li>
            <li style={{ fontSize: "14px", marginBottom: "8px", color: "#cc0000" }}>Never leave computers or devices unlocked in public spaces.</li>
            <li style={{ fontSize: "14px", marginBottom: "8px", color: "#cc0000" }}>Never ignore or conceal a data loss (lost phone, hacked email).</li>
          </ul>
        </div>

        <div style={{ position: "sticky", top: "120px" }}>
          <div className="compulsory-nos-badge" style={{ backgroundColor: "#f8f9fa", border: "1px solid var(--border-color)", padding: "30px", borderRadius: "var(--border-radius-lg)" }}>
            <h4 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-blue)" }}>Interactive Evaluation</h4>
            <p style={{ fontSize: "13px", color: "#666666", marginBottom: "20px" }}>
              Evaluate your adherence to the IAS/N9004 standard using our checklist tool.
            </p>
            <Link href="/tools/checklist" className="btn btn-primary full-width" style={{ fontSize: "12px" }}>
              Take assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
