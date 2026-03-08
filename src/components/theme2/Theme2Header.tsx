"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, Grid3X3, ArrowRight } from "lucide-react";
import styles from "./Theme2Header.module.css";

const navLinks = [
  { href: "/theme-2#hero", label: "Home", dropdown: false, active: true },
  { href: "/theme-2#about", label: "About Us", dropdown: false },
  { href: "/theme-2#services", label: "Services", dropdown: false },
  { href: "/theme-2#education", label: "Education", dropdown: false },
  { href: "/theme-2#why-choose-us", label: "Why Choose Us", dropdown: false },
  { href: "/theme-2#process", label: "Our Process", dropdown: false },
  { href: "/theme-2#team", label: "Team", dropdown: false },
  { href: "/theme-2#blog", label: "Blog", dropdown: false },
  { href: "/theme-2#contact", label: "Contact", dropdown: false },
];

export default function Theme2Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Left: Red brand section with soft concave curve */}
        <Link href="/theme-2" className={styles.brandSection}>
          <svg
            viewBox="0 0 32 32"
            className={styles.logoIcon}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="16" cy="16" r="12" strokeOpacity="0.45" strokeDasharray="4 3" />
            <circle cx="16" cy="16" r="9" strokeOpacity="0.85" />
            <path d="M8 12l16 8-8-4-4 8 4-12z" strokeWidth="1.5" />
          </svg>
          <span className={styles.brandName}>Immidox</span>
        </Link>

        {/* Center + Right: White pill nav (overlaps red) + Sign Up + utility icons */}
        <div className={styles.navWrapper}>
          <nav className={styles.navPill}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${link.active ? styles.navLinkActive : ""}`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    className={styles.chevron}
                    strokeWidth={2.5}
                  />
                )}
              </Link>
            ))}
            <Link href="/theme-2#contact" className={styles.signUpBtn}>
              Sign Up
              <ArrowRight width={16} height={16} strokeWidth={2.5} />
            </Link>
          </nav>

          <div className={styles.utilButtons}>
            <Link
              href="/"
              className="text-[#666666] hover:text-[#e94e4e] text-sm font-medium transition-colors hidden xl:inline"
            >
              Theme 1
            </Link>
            <button
              className={styles.utilBtn}
              type="button"
              aria-label="Search"
            >
              <Search width={20} height={20} strokeWidth={2} />
            </button>
            <button
              className={styles.utilBtn}
              type="button"
              aria-label="Menu"
            >
              <Grid3X3 width={20} height={20} strokeWidth={2} />
            </button>
          </div>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={styles.mobileDropdown}
        style={{
          maxHeight: isMobileMenuOpen ? 520 : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
      >
        <div className={styles.mobileDropdownContent}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${styles.mobileDropdownLink} ${link.active ? styles.mobileDropdownLinkActive : ""}`}
            >
              {link.label}
                {link.dropdown && (
                  <ChevronDown width={16} height={16} style={{ marginLeft: "auto", color: "#94a3b8" }} />
                )}
            </Link>
          ))}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${styles.mobileDropdownLink}`}
          >
            Theme 1
          </Link>
          <Link
            href="/theme-2#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={styles.mobileSignUp}
          >
            Sign Up <ArrowRight width={16} height={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
