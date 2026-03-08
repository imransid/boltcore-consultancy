"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Visa Services" },
  { href: "/#why-choose-us", label: "Why Choose Us" },
  { href: "/#stats", label: "Stats" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden lg:block border-b transition-all duration-300 ${
          isScrolled ? "border-transparent h-0 overflow-hidden py-0" : "border-slate-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm text-slate-600">
            <div className="flex items-center gap-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-[#0c4a6e] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:info@immidox.com"
                className="flex items-center gap-2 hover:text-[#0c4a6e] transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@immidox.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>123 Immigration St, New York, NY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl font-display font-bold transition-colors ${
                isScrolled ? "text-[#0c4a6e]" : "text-white"
              }`}
            >
              Immidox
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors hover:text-[#d4af37] ${
                  isScrolled ? "text-slate-700" : "text-white/95"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/theme-2"
              className="text-sm text-slate-500 hover:text-slate-700 font-medium"
            >
              Theme 2
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-2.5 bg-[#d4af37] text-[#0c4a6e] font-semibold rounded-lg hover:bg-[#e8c547] transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-xl px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#0c4a6e]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-[#d4af37] text-[#0c4a6e] font-semibold rounded-lg"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
