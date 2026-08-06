"use client";

import { useState } from "react";

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState({
    rule1: false,
    rule2: false,
    rule3: false,
    rule4: false,
    rule5: false,
  });

  const [results, setResults] = useState(null);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const calculateCompliance = () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    let badgeClass = "critical";
    let badgeText = "Critical Hazards";
    let feedback = "";
    let recommendations = [];

    if (checkedCount <= 2) {
      badgeClass = "critical";
      badgeText = "Critical Risk";
      feedback = "Your current data handling practices are highly non-compliant under India's DPDP Act regulations. You are exposed to significant liabilities regarding security breaches and unauthorized data collection.";
      recommendations = [
        "Audit immediate data collections: only request fields essential for task completion.",
        "Implement device passcode locks on all personal and business machines.",
        "Discard raw files containing client contacts from local download folders.",
        "Establish simple templates to inform users why you need their phone number/email."
      ];
    } else if (checkedCount <= 4) {
      badgeClass = "medium";
      badgeText = "Partial Compliance";
      feedback = "You have established basic data hygiene but remain exposed in critical workflows. You must implement robust controls to safeguard consent records and restrict data sharing.";
      recommendations = [
        "Define explicit data deletion procedures for temporary spreadsheets and documents.",
        "Secure storage mechanisms: ensure PAN, Aadhaar, and financial records are not saved in open messaging apps.",
        "Formulate clean, non-technical templates explaining processing purposes to data principals."
      ];
    } else {
      badgeClass = "success";
      badgeText = "Exemplary Compliance";
      feedback = "Your personal operational practices are aligned with the IAS/N9004 standard for minimal individual compliance. Continue monitoring access policies and maintaining data logs.";
      recommendations = [
        "Verify alignment of vendor processing terms with the organization's rules.",
        "Contribute to continuous improvement by participating in team security reviews.",
        "Archive historical logs in accordance with regulatory retention standards."
      ];
    }

    setResults({
      score: `${checkedCount}/5`,
      badgeClass,
      badgeText,
      feedback,
      recommendations,
    });
  };

  return (
    <div className="self-check-form-wrapper">
      <h3>1-Minute Compliance Check</h3>
      <form id="checklistForm">
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="rule1"
              checked={checkedItems.rule1}
              onChange={handleCheckboxChange}
            />
            <span className="custom-checkbox"></span>
            <span className="label-text">
              <strong>Rule 1 (Minimal Collection):</strong> I only ask for or collect personal details that are strictly required to perform my immediate task.
            </span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="rule2"
              checked={checkedItems.rule2}
              onChange={handleCheckboxChange}
            />
            <span className="custom-checkbox"></span>
            <span className="label-text">
              <strong>Rule 2 (Simple Notice):</strong> I inform the individual in clear language why their details are being collected (no hidden legal jargon).
            </span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="rule3"
              checked={checkedItems.rule3}
              onChange={handleCheckboxChange}
            />
            <span className="custom-checkbox"></span>
            <span className="label-text">
              <strong>Rule 3 (Stated Purpose Only):</strong> I do not repurpose customer contact information (e.g. using billing numbers for unauthorized marketing).
            </span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="rule4"
              checked={checkedItems.rule4}
              onChange={handleCheckboxChange}
            />
            <span className="custom-checkbox"></span>
            <span className="label-text">
              <strong>Rule 4 (Safe Storage):</strong> I lock my phone/laptop, do not share devices with unauthorized persons, and never casual-share databases on public messaging apps.
            </span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="rule5"
              checked={checkedItems.rule5}
              onChange={handleCheckboxChange}
            />
            <span className="custom-checkbox"></span>
            <span className="label-text">
              <strong>Rule 5 (Regular Deletion):</strong> I delete old customer lists, discard raw spreadsheets, and clean my download folders regularly rather than keeping data indefinitely.
            </span>
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary full-width"
          onClick={calculateCompliance}
        >
          Evaluate Compliance
        </button>
      </form>

      {results && (
        <div className="results-box" id="resultsBox">
          <div className="score-badge-area">
            <span className="score-number">{results.score}</span>
            <span className={`score-badge ${results.badgeClass}`}>
              {results.badgeText}
            </span>
          </div>
          <div className="score-feedbackText" style={{ fontSize: "14px", color: "#555555", marginBottom: "20px" }}>
            {results.feedback}
          </div>
          <div className="recommendations-box">
            <h5 style={{ fontSize: "14px", color: "#111111", marginBottom: "10px" }}>
              Key Action Items:
            </h5>
            <ul>
              {results.recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
