import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src="/logo.svg" alt="CDDPP Logo" className="footer-logo" />
          <p>
            Council for Digital Data Protection and Privacy. Formulating frameworks, audit protocols, and standards under the National DPDP mandates.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Access</h4>
          <ul>
            <li>
              <Link href="/the-firm/core-values">Core Values</Link>
            </li>
            <li>
              <Link href="/the-firm/team">Leadership Team</Link>
            </li>
            <li>
              <Link href="/practice-areas">Practice Areas</Link>
            </li>
            <li>
              <Link href="/standards/dpo-framework">DPO Qualifications</Link>
            </li>
            <li>
              <Link href="/tools/checklist">Compliance Self-Assessment</Link>
            </li>
          </ul>
        </div>
        <div className="footer-compliance">
          <h4>Framework Reference</h4>
          <p>
            Designed in compliance with the guidelines of the <strong>IASC Sector Skill Council</strong> DPO QP Parameters and the national regulations of the Digital Personal Data Protection Act of India.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between">
          <p>&copy; 2026 Council for Digital Data Protection and Privacy. All Rights Reserved.</p>
          <div className="footer-sub-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
