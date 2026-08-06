import Link from "next/link";

export default function PracticeAreas() {
  const pillars = [
    {
      id: "enterprise-governance",
      num: "01",
      title: "Enterprise Privacy Governance",
      desc: "Establishing organizational privacy policies, assigning data fiduciaries, defining RACI matrices, and creating robust governance review meetings.",
      link: "/practice-areas/enterprise-governance"
    },
    {
      id: "risk-compliance",
      num: "02",
      title: "Risk & Compliance Management",
      desc: "Executing Data Protection Impact Assessments (DPIAs), mapping data flows, setting up consent management registries, and organizing breach logs.",
      link: "/practice-areas/risk-compliance"
    },
    {
      id: "regulatory-interface",
      num: "03",
      title: "Regulatory & Stakeholder Interface",
      desc: "Handling data principal grievances, managing rights requests (access, erasure, correction), and coordinating official regulatory responses.",
      link: "/practice-areas/regulatory-interface"
    },
    {
      id: "privacy-assurance",
      num: "04",
      title: "Privacy Assurance & Maturity",
      desc: "Monitoring key performance indicators, auditing control mechanisms, benchmarking against standards, and planning role-based training.",
      link: "/practice-areas/privacy-assurance"
    }
  ];

  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">Practice Areas</span>
        <h2>Governance Framework</h2>
        <div className="header-line"></div>
      </div>

      <div className="responsive-sidebar-grid">
        <div>
          <p className="lead-text" style={{ marginBottom: "24px" }}>
            Our council specializes in translating high-level regulations under India's DPDP Act into practical, system-driven corporate processes.
          </p>
          <p style={{ marginBottom: "32px", color: "#555555" }}>
            Our governance practices cover four primary compliance pillars. Explore each practice area below to read about our recommended standards, operational frameworks, and compliance reporting tools.
          </p>

          <div className="responsive-grid-2">
            {pillars.map((p) => (
              <div key={p.id} className="pillar-card" style={{ height: "100%" }}>
                <div className="pillar-num">{p.num}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc" style={{ marginBottom: "20px" }}>{p.desc}</p>
                <Link href={p.link} className="btn btn-card-details" style={{ marginTop: "auto" }}>
                  View Practice details
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "sticky", top: "120px" }}>
          <div className="compulsory-nos-badge" style={{ backgroundColor: "#f8f9fa", border: "1px solid var(--border-color)", padding: "30px", borderRadius: "var(--border-radius-lg)" }}>
            <h4 style={{ fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-blue)" }}>Advisory Mandate</h4>
            <p style={{ fontSize: "13.5px", color: "#666666", marginBottom: "20px" }}>
              CDDPP provides expert guidance to help boards and compliance fiduciaries structure robust, audit-defensible privacy architectures.
            </p>
            <Link href="/contact" className="btn btn-primary full-width" style={{ fontSize: "12px" }}>
              Request advisory consult
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
