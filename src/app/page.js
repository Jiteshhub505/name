import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">Established Standards under DPDP Act</span>
            <h1 className="hero-title">Securing Digital Trust, Fostering Enterprise Compliance</h1>
            <p className="hero-desc">
              The Council for Digital Data Protection and Privacy (CDDPP) formulates frameworks, guides enterprise privacy governance, and trains certified Data Protection Officers (DPO) to align business operations with national regulations.
            </p>
            <div className="hero-actions">
              <Link href="/standards/dpo-framework" className="btn btn-primary">
                DPO Standard
              </Link>
              <Link href="/tools/checklist" className="btn btn-secondary">
                1-Minute Compliance Check
              </Link>
            </div>
          </div>
          <div className="hero-graphic-box">
            <div className="emblem-card">
              <img src="/logo.svg" alt="CDDPP Seal" className="hero-emblem-svg" />
              <div className="emblem-stats">
                <div className="stat-item">
                  <span className="stat-num">Level 7.5</span>
                  <span className="stat-label">NSQF Standard</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">IAS/Q8031</span>
                  <span className="stat-label">DPO QP Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Who We Are</span>
            <h2>Council for Digital Data Protection and Privacy</h2>
            <div className="header-line"></div>
          </div>
          <div className="about-grid">
            <div className="about-text-column">
              <p className="lead-text">
                CDDPP is a highly specialized national council established to address the critical governance and accountability challenges posed by India's Digital Personal Data Protection (DPDP) regulations.
              </p>
              <p>
                Our mandate spans the definition of organizational privacy governance architectures, risk mapping, data lifecycle compliance audits, and regulatory liaison. We serve as the bridging interface between data fiduciaries, executive management, and statutory authorities.
              </p>
              <p style={{ marginBottom: "24px" }}>
                By empowering organizations with robust templates, operational guidelines, and roles like the <strong>Data Protection Officer (DPO)</strong>, we establish workplace digital hygiene, mitigate compliance risk, and drive enterprise-level data privacy maturity.
              </p>
              <Link href="/the-firm/core-values" className="btn btn-secondary">
                Read Core Values
              </Link>
            </div>
            <div className="about-features-column">
              <div className="feat-box">
                <div className="feat-icon">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
                <div className="feat-info">
                  <h3>Liaison & Legal Advisory</h3>
                  <p>Establishing official channels of communications between organizations and the Data Protection Board of India.</p>
                </div>
              </div>
              <div className="feat-box">
                <div className="feat-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div className="feat-info">
                  <h3>Risk & Control Safeguards</h3>
                  <p>Conducting Data Protection Impact Assessments (DPIAs), risk mapping, and managing incident containment workflows.</p>
                </div>
              </div>
              <div className="feat-box">
                <div className="feat-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="feat-info">
                  <h3>Capacity Building</h3>
                  <p>Developing role-based competency modules, general awareness training, and qualification standards for professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Overview */}
      <section id="pillars" className="pillars-section">
        <div className="container">
          <div className="section-header center-align">
            <span className="section-tag">Practice Areas</span>
            <h2>The Four Pillars of Data Protection Governance</h2>
            <div className="header-line center-align"></div>
            <p className="section-desc">
              Our operational standards cover the entire matrix of enterprise compliance, from macro policy governance down to micro individual behaviors.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">Enterprise Privacy Governance</h3>
              <p className="pillar-desc">
                Structuring the corporate framework: defining centralized vs. decentralized models, assigning RACI matrices, and establishing policies.
              </p>
              <Link href="/practice-areas/enterprise-governance" className="btn btn-card-details" style={{ marginTop: "auto" }}>
                Learn More
              </Link>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">Risk & Compliance Management</h3>
              <p className="pillar-desc">
                Operationalizing data mapping, executing Data Protection Impact Assessments (DPIAs), and executing breach containment protocols.
              </p>
              <Link href="/practice-areas/risk-compliance" className="btn btn-card-details" style={{ marginTop: "auto" }}>
                Learn More
              </Link>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">Regulatory & Stakeholder Interface</h3>
              <p className="pillar-desc">
                Acting as the key interface for regulatory audits. Managing data principal rights and coordinating grievance escalations.
              </p>
              <Link href="/practice-areas/regulatory-interface" className="btn btn-card-details" style={{ marginTop: "auto" }}>
                Learn More
              </Link>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">04</div>
              <h3 className="pillar-title">Privacy Assurance & Maturity</h3>
              <p className="pillar-desc">
                Driving long-term maturity: executing capability gap assessments, tracking key performance metrics, and conducting training.
              </p>
              <Link href="/practice-areas/privacy-assurance" className="btn btn-card-details" style={{ marginTop: "auto" }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Assessment Teaser */}
      <section className="self-check-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="self-check-grid">
            <div className="self-check-info">
              <span className="section-tag">Interactive Evaluation</span>
              <h2>Workplace Data Hygiene Checker</h2>
              <p style={{ marginBottom: "20px" }}>
                India's DPDP Act mandates basic data discipline at the workplace. Evaluate your personal data handling practices using our interactive checklist derived from the national <strong>IAS/N9004</strong> standard.
              </p>
              <Link href="/tools/checklist" className="btn btn-primary">
                Launch Evaluation Tool
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="guideline-card" style={{ marginTop: "0", width: "100%", maxWidth: "450px" }}>
                <h5>
                  <i className="fa-solid fa-circle-info"></i> Individual Compliance Checklist
                </h5>
                <p>The checker scores you out of 5 based on key data rules:</p>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "8px", fontSize: "13.5px" }}><i className="fa-solid fa-circle-check" style={{ color: "#004ea3", marginRight: "8px" }}></i> Minimal data collection checks</li>
                  <li style={{ marginBottom: "8px", fontSize: "13.5px" }}><i className="fa-solid fa-circle-check" style={{ color: "#004ea3", marginRight: "8px" }}></i> Simple notice and transparency</li>
                  <li style={{ marginBottom: "8px", fontSize: "13.5px" }}><i className="fa-solid fa-circle-check" style={{ color: "#004ea3", marginRight: "8px" }}></i> Device lock & security safeguards</li>
                  <li style={{ marginBottom: "8px", fontSize: "13.5px" }}><i className="fa-solid fa-circle-check" style={{ color: "#004ea3", marginRight: "8px" }}></i> Lifecycle deletion protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Board Teaser */}
      <section className="directors-section" style={{ backgroundColor: "var(--bg-gray)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header center-align">
            <span className="section-tag">Council Leadership</span>
            <h2>Our Board of Directors</h2>
            <div className="header-line center-align"></div>
            <p className="section-desc">
              CDDPP is guided by a board of seasoned professionals encompassing administrative tribunal judges, turnkey automation experts, green tech developers, and naval meteorology commanders.
            </p>
          </div>

          <div className="directors-grid" style={{ marginBottom: "40px" }}>
            <div className="director-card">
              <div className="card-avatar"><i className="fa-solid fa-gavel"></i></div>
              <h3>Kamal Kant Jain</h3>
              <p className="dir-credentials">CA, LLB, Former Member UPREAT</p>
              <p className="dir-short">Delivered ~2,000 tribunal judgments. Over 30 years experience in corporate administration, finance, and legal adjudication.</p>
            </div>
            <div className="director-card">
              <div className="card-avatar"><i className="fa-solid fa-gears"></i></div>
              <h3>Shashank Singhal</h3>
              <p className="dir-credentials">BE (Honours), Technical Director</p>
              <p className="dir-short">46 years technical experience heading turnkey process plant instrumentation, contract management, and ISO audits.</p>
            </div>
            <div className="director-card">
              <div className="card-avatar"><i className="fa-solid fa-anchor"></i></div>
              <h3>Cmde Manoj Kumar Singh</h3>
              <p className="dir-credentials">PhD, Strategic Director</p>
              <p className="dir-short">Served 36 years in the Indian Navy. Headed Naval Meteorology Division & Naval Education Branch. PhD in Climate Change.</p>
            </div>
            <div className="director-card">
              <div className="card-avatar"><i className="fa-solid fa-solar-panel"></i></div>
              <h3>Lokesh Bansal</h3>
              <p className="dir-credentials">BE Electrical, MBA, Co-Founder</p>
              <p className="dir-short">Founder & CEO of Innoprudent, leading environmental and solar solutions provider. Held senior leadership roles at Reliance.</p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/the-firm/team" className="btn btn-primary">
              View Timelines & Working Practices
            </Link>
          </div>
        </div>
      </section>

      {/* Advisory Inquiry Teaser */}
      <section className="contact-section" style={{ padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="font-white" style={{ fontSize: "32px", marginBottom: "16px" }}>Establish Your DPDP Adherence Program</h2>
          <p className="font-light-gray" style={{ maxWidth: "600px", margin: "0 auto 32px auto", fontSize: "16px" }}>
            Connect with our advisory registry to request formal DPO training frameworks, compliance audits, or data principal grievance protocols.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Advisory Office
          </Link>
        </div>
      </section>
    </>
  );
}
