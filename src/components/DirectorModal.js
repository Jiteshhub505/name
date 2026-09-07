"use client";

import { useEffect } from "react";

export default function DirectorModal({ isOpen, onClose, directorKey }) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const directorsData = {
    kkj: {
      name: "Kamal Kant Jain",
      title: "Co-Founder & Director, CDDPP",
      credentials: "CA, LLB, Former Member U.P. Real Estate Appellate Tribunal (UPREAT)",
      icon: "fa-gavel",
      sections: [
        {
          heading: "Professional Profile",
          content: `Served as Technical Member of the U.P. Real Estate Appellate Tribunal (UPREAT) from September 2018 until September 2023. During this tenure, delivered approximately 2,000 judgments, out of which about 800 are reported on SCC online RERA (UP). He also headed the implementation and development team of the e-court at UPREAT (Online Justice Delivery System) developed through the National Informatics Centre (NIC).`
        },
        {
          heading: "Areas of Expertise",
          content: `More than 30 years of extensive experience in Accountancy, Auditing, Industrial Management, Industrial Reconstruction, Corporate Administration, Finance, and Law. Practiced as a Chartered Accountant for a long period, working in varied professional capacities with top Public Sector Undertakings (PSUs), commercial banks, financial institutions, and leading industrial houses of India.`
        },
        {
          heading: "Notable Advisory & Investigations Assignments",
          bullets: [
            "Conducted special investigations for BIFR, financial institutions, and banks.",
            "Formulated credit ratings guidelines of state electricity boards for the Rural Electrification Corporation (REC).",
            "Formulated guidelines for IREDA for granting NOCs to borrowers for mergers, demergers, and other corporate arrangements.",
            "Formulated the Demutualisation Scheme of the Delhi Stock Exchange (DSE).",
            "Served as Director of companies engaged in Information Technology, Agriculture, Infrastructure, and Real Estate.",
            "Partner & Managing Committee Member of an affordable housing project under a joint venture with NBCC."
          ]
        },
        {
          heading: "Awards, Achievements & Social Contribution",
          bullets: [
            "Patent holder of the concept of 'Social Currency and Peers Review System' in the United States of America and multiple other countries.",
            "Appointed as a member of the committee for affordable housing, Government of Uttar Pradesh (UP).",
            "Awarded by the Institute of Chartered Accountants of India (ICAI) for the outstanding contribution of members towards society, presented by Shri Arun Jaitley, honorable former Finance Minister of India.",
            "Member of the First Givers Club (Give India).",
            "Author of the books: 'Change in Social, Political and Economic System' and 'Equanimity and Economics'.",
            "Advocate of Corporate Social Responsibility (CSR), natural justice, and equity. Developed 'Sociorich', a portal to reward and encourage selfless social deeds via social currency.",
            "Founder Managing Director of Prompt Real Estate Rating and Information Centre Pvt. Ltd.",
            "Founder promoter of 'RESO', a digital portal for Alternate Dispute Resolution."
          ]
        }
      ]
    },
    ss: {
      name: "Shashank Singhal",
      title: "Technical Director & Compliance Auditor, CDDPP",
      credentials: "B.Sc., B.E. (Electrical Engineering, Honours), IMS Lead Auditor",
      icon: "fa-gears",
      sections: [
        {
          heading: "Executive Summary",
          content: `About 46 years of successful, highly diversified technical and management experience. Completed B.Sc. from University of Allahabad in 1975 and Bachelor of Engineering (Electrical) from M.N.R. Engineering College Allahabad (now MNNIT) in 1979, graduating First Class with Honours.`
        },
        {
          heading: "Timeline & Career History",
          table: {
            headers: ["Company", "Country", "Duration", "Designation"],
            rows: [
              ["SRS International FZC LLC", "UAE", "3 Years", "Partner"],
              ["Aver Solutions Group", "India/UAE", "2 Years", "Consultant"],
              ["Yantra International FZE", "UAE", "3 Years", "Owner & CEO"],
              ["Jasubhai International FZCO", "UAE", "9 Years", "Chief Operating Officer"],
              ["Emerson Process Management", "India", "14 Years", "Director"],
              ["Modi Olivetti Limited", "India", "3 Years", "Sr. Manager (Engg. & Operations)"],
              ["Uptron India Limited", "India", "6 Years", "Project Manager"],
              ["Instrumentation Limited", "India", "5 Years", "Engineer (Systems & Projects)"]
            ]
          }
        },
        {
          heading: "Core Operational Competencies & Working Practices",
          bullets: [
            "Comprehensive Factory Operations: Hands-on experience managing manufacturing plants, global sourcing, procurements, international quality frameworks, logistics, imports, and contract regulations.",
            "Technical Systems Management: Specialized in electronics, computers, DCS (Distributed Control Systems), SCADA, analyzer shelters, field instrumentation, control systems, and AI-based continuous running process plant operation management.",
            "Organizational Engineering: Expert in corporate planning, business plan development, selecting/training top-tier talent, and structuring process-driven organizations that operate independently of individuals.",
            "Integrated Quality Audits: Extensive experience implementing and maintaining Integrated Management Systems based on ISO 9001, ISO 14001, and ISO 45001 standards.",
            "Global Travel: Well-traveled for business consultancies and projects across the USA, Europe, Middle East, and Asia-Pacific countries."
          ]
        }
      ]
    },
    mks: {
      name: "Commodore Manoj Kumar Singh (Retd.)",
      title: "Strategic Director & Infrastructure Head, CDDPP",
      credentials: "B.Tech (Electrical), M.Sc. (Def), MMS, M.Phil, Ph.D (Mumbai University)",
      icon: "fa-anchor",
      sections: [
        {
          heading: "Naval Career & Command Experience",
          content: `Commissioned in the Indian Navy in February 1986 and superannuated after more than 36 years of distinguished service to the nation. Held various key administrative, training, and operational appointments both ashore and at sea, serving onboard aircraft carrier INS Viraat, Frigate INS Ganga, Corvette INS Khukri, and Training Ship INS Tir.`
        },
        {
          heading: "Academic Qualifications & Research",
          bullets: [
            "B.Tech in Electrical Engineering.",
            "Alumnus of Defence Services Staff College (DSSC), Wellington, India, and CDM.",
            "M.Sc. in Defence and Strategic Studies.",
            "Masters in Management Studies (MMS).",
            "M.Phil in Management.",
            "Doctorate (Ph.D) from Mumbai University in the area of Climate Change and its Impact in the Maritime Domain."
          ]
        },
        {
          heading: "Scientific & Operational Leadership",
          content: `From 2015 to 2022, headed the Naval Meteorological & Oceanographic Division as well as the Naval Education Branch. Underwent advanced courses at India Meteorological Department, Pune (Advanced Meteorology), IIT New Delhi (Advanced Oceanography), and Naval Postgraduate School, Monterey, USA (Operational Oceanography). He was a key member of various national committees on Atmosphere and Ocean Sciences.`
        },
        {
          heading: "Post-Superannuation & Make in India Initiatives",
          content: `Following retirement, joined Stygon Aviation & Defence Pvt. Ltd., a diversified start-up, as CEO to promote 'Make in India' initiatives. He is also empaneled with the Union Public Service Commission (UPSC) to assist the commission in various official selection boards. Additionally, he is a qualified instructor in parasailing.`
        }
      ]
    },
    lb: {
      name: "Lokesh Bansal",
      title: "Co-Founder & Director, CDDPP",
      credentials: "B.E. (Electrical Engineering, 1984), MBA",
      icon: "fa-solar-panel",
      sections: [
        {
          heading: "Business Profile & Entrepreneurship",
          content: `CEO & Founder of Innoprudent Technologies & Solutions. Established in July 2018 and based in Delhi NCR, the company is among the leading players in North India for energy and environmental solutions. Its product domains include: Dual Fuel systems for DG sets, highly efficient UPS systems, solar power engineering, energy-saving systems for compressed air, AHUs, and technical consulting.`
        },
        {
          heading: "Corporate Track Record",
          content: `Graduated in Electrical Engineering in 1984, followed by an MBA. Served at senior executive positions in highly reputed national and multinational corporate groups, including Reliance Industries, Metro Cash & Carry, RPG Group, Escorts, and Uptron.`
        },
        {
          heading: "Council Mandate",
          content: `Oversees the green compliance aspects of digital infrastructure. Guides the Council on energy efficiency, green data center infrastructures, carbon footprints of enterprise data processing, and coordinates technical resources.`
        }
      ]
    }
  };

  const data = directorsData[directorKey];
  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content-area">
          <div className="modal-bio-header">
            <div className="modal-avatar">
              <i className={`fa-solid ${data.icon}`}></i>
            </div>
            <div className="modal-title-info">
              <span className="dir-role">{data.title}</span>
              <h3>{data.name}</h3>
              <h4>{data.credentials}</h4>
            </div>
          </div>
          <div className="modal-bio-body">
            {data.sections.map((section, idx) => (
              <div key={idx} className="bio-section">
                <h4>{section.heading}</h4>
                {section.content && <p>{section.content}</p>}
                
                {section.bullets && (
                  <ul className="check-list" style={{ paddingLeft: "0", listStyle: "none" }}>
                    {section.bullets.map((bullet, i) => (
                      <li key={i} style={{ marginBottom: "10px", display: "flex", gap: "10px", fontSize: "14px" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.table && (
                  <div style={{ overflowX: "auto", marginBottom: "20px" }}>
                    <table className="dpo-table" style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          {section.table.headers.map((h, i) => (
                            <th key={i} style={{ padding: "10px", borderBottom: "2px solid #ddd", background: "#f8f9fa", fontWeight: "bold", fontSize: "13.5px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} style={{ padding: "10px", borderBottom: "1px solid #eee", fontSize: "13px" }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
