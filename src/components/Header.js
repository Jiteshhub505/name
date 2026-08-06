"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper to determine if link is active
  const isActive = (path) => pathname === path;

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-area">
          <Link href="/" className="logo-link">
            <img src="/logo.svg" alt="CDDPP Logo" className="header-logo" />
            <div className="logo-text">
              <span className="logo-title">CDDPP</span>
              <span className="logo-subtitle">Digital Data Protection & Privacy</span>
            </div>
          </Link>
        </div>

        <button
          className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            
            {/* The Firm Dropdown */}
            <li className="dropdown-parent">
              <span className={`dropdown-trigger ${pathname.startsWith("/the-firm") ? "active" : ""}`}>
                The Firm <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/the-firm/core-values" className={isActive("/the-firm/core-values") ? "active" : ""} onClick={handleLinkClick}>
                    Core Values
                  </Link>
                </li>
                <li>
                  <Link href="/the-firm/team" className={isActive("/the-firm/team") ? "active" : ""} onClick={handleLinkClick}>
                    Team / Directors
                  </Link>
                </li>
              </ul>
            </li>

            {/* Practice Areas Dropdown */}
            <li className="dropdown-parent">
              <span className={`dropdown-trigger ${pathname.startsWith("/practice-areas") ? "active" : ""}`}>
                Practice Areas <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/practice-areas" className={isActive("/practice-areas") ? "active" : ""} onClick={handleLinkClick}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas/enterprise-governance" className={isActive("/practice-areas/enterprise-governance") ? "active" : ""} onClick={handleLinkClick}>
                    Enterprise Governance
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas/risk-compliance" className={isActive("/practice-areas/risk-compliance") ? "active" : ""} onClick={handleLinkClick}>
                    Risk & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas/regulatory-interface" className={isActive("/practice-areas/regulatory-interface") ? "active" : ""} onClick={handleLinkClick}>
                    Regulatory Interface
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas/privacy-assurance" className={isActive("/practice-areas/privacy-assurance") ? "active" : ""} onClick={handleLinkClick}>
                    Privacy Assurance
                  </Link>
                </li>
              </ul>
            </li>

            {/* Standards Dropdown */}
            <li className="dropdown-parent">
              <span className={`dropdown-trigger ${pathname.startsWith("/standards") ? "active" : ""}`}>
                Standards <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/standards/dpo-framework" className={isActive("/standards/dpo-framework") ? "active" : ""} onClick={handleLinkClick}>
                    DPO Framework (IAS/Q8031)
                  </Link>
                </li>
                <li>
                  <Link href="/standards/individual-hygiene" className={isActive("/standards/individual-hygiene") ? "active" : ""} onClick={handleLinkClick}>
                    Individual Hygiene (IAS/N9004)
                  </Link>
                </li>
              </ul>
            </li>

            {/* Tools Dropdown */}
            <li className="dropdown-parent">
              <span className={`dropdown-trigger ${pathname.startsWith("/tools") ? "active" : ""}`}>
                Tools <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/tools/checklist" className={isActive("/tools/checklist") ? "active" : ""} onClick={handleLinkClick}>
                    Compliance Checklist
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
