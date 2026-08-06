"use client";

import { useState } from "react";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    e.target.reset();
    setTimeout(() => {
      setShowSuccess(false);
    }, 6000);
  };

  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <div className="section-header">
        <span className="section-tag">Registry & Office</span>
        <h2>Contact Us</h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-grid" style={{ backgroundColor: "var(--primary-dark)", padding: "40px", borderRadius: "var(--border-radius-lg)" }}>
        <div className="contact-info" style={{ marginTop: "0" }}>
          <h2 className="font-white" style={{ fontSize: "28px" }}>CDDPP Headquarters</h2>
          <div className="header-line left-align bg-white" style={{ marginBottom: "20px" }}></div>
          <p className="font-light-gray" style={{ marginBottom: "30px", fontSize: "14.5px" }}>
            Reach out to our advisory registry to coordinate DPO training courses, request enterprise audits, or submit query clarifications.
          </p>
          
          <div className="contact-details-list">
            <div className="contact-detail-item">
              <i className="fa-solid fa-location-dot" style={{ color: "#8ab7ff", fontSize: "20px" }}></i>
              <div className="c-text">
                <strong style={{ color: "#ffffff", fontSize: "13px", letterSpacing: "0.5px" }}>Registered Office</strong>
                <p style={{ color: "#cccccc", fontSize: "13.5px" }}>E 53, Sector 72, Noida, Uttar Pradesh, India - 201301</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <i className="fa-solid fa-house" style={{ color: "#8ab7ff", fontSize: "20px" }}></i>
              <div className="c-text">
                <strong style={{ color: "#ffffff", fontSize: "13px", letterSpacing: "0.5px" }}>Technical & Audit Directorate</strong>
                <p style={{ color: "#cccccc", fontSize: "13.5px" }}>C2706, Tower-C, Prateek Edifice, Sector-107, Noida, UP - 201301</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <i className="fa-solid fa-phone" style={{ color: "#8ab7ff", fontSize: "20px" }}></i>
              <div className="c-text">
                <strong style={{ color: "#ffffff", fontSize: "13px", letterSpacing: "0.5px" }}>Direct Lines</strong>
                <p style={{ color: "#cccccc", fontSize: "13.5px" }}>+91 9810126948 (Registry)<br />+91 9953300015 (Audit Office)</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <i className="fa-solid fa-envelope" style={{ color: "#8ab7ff", fontSize: "20px" }}></i>
              <div className="c-text">
                <strong style={{ color: "#ffffff", fontSize: "13px", letterSpacing: "0.5px" }}>Email Registry</strong>
                <p style={{ color: "#cccccc", fontSize: "13.5px" }}>amami.shashank@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper" style={{ padding: "30px", borderRadius: "var(--border-radius-md)" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Send an Advisory Inquiry</h3>
          <form id="contactForm" onSubmit={handleContactSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cName">Your Name *</label>
                <input type="text" id="cName" required placeholder="e.g., Sunil Sharma" />
              </div>
              <div className="form-group">
                <label htmlFor="cEmail">Email Address *</label>
                <input type="email" id="cEmail" required placeholder="e.g., name@company.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cOrg">Organization Name</label>
              <input type="text" id="cOrg" placeholder="e.g., ABC Solutions Pvt. Ltd." />
            </div>
            <div className="form-group">
              <label htmlFor="cTopic">Nature of Inquiry</label>
              <select id="cTopic">
                <option value="general">General Advisory Query</option>
                <option value="dpo-training">Data Protection Officer (DPO) Training</option>
                <option value="audit">Enterprise Compliance Audit</option>
                <option value="grievance">Grievance Handling Setup</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cMessage">Message Details *</label>
              <textarea id="cMessage" rows="5" required placeholder="Describe your requirement in detail..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">Submit Advisory Inquiry</button>
            {showSuccess && (
              <div id="formSuccess" className="form-status success" style={{ marginTop: "16px", padding: "12px", background: "#e6f7ed", border: "1px solid #b3e6c9", color: "#008a3b", borderRadius: "var(--border-radius-sm)", fontSize: "13px" }}>
                Inquiry sent successfully! Our advisory team will reach out within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
