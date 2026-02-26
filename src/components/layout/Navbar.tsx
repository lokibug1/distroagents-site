"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-[22px] font-bold tracking-tight">
              <span className="text-white">Distro</span>
              <span className="text-blue-400">Agents</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3.5 py-2 text-[14px] text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03] cursor-pointer">
                    {link.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                    <div className="w-[340px] glass-strong rounded-2xl shadow-2xl shadow-black/40 p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors group/item"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500/40 mt-2 group-hover/item:bg-blue-400 transition-colors shrink-0" />
                          <div>
                            <div className="text-[14px] font-medium text-slate-200 group-hover/item:text-white transition-colors">{child.label}</div>
                            <div className="text-[12px] text-slate-500 mt-0.5">{child.description}</div>
                          </div>
                        </Link>
                      ))}
                      <div className="mt-1 pt-1 border-t border-white/[0.04]">
                        <Link href="/use-cases" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors text-[14px] font-medium text-blue-400">
                          View All Use Cases
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-[14px] text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button href="/book-demo" size="sm">
              Book a Demo
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/[0.05] transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${mobileOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileOpen(false)} />
        <div className={`relative h-full max-h-[calc(100vh-72px)] overflow-y-auto bg-navy-950 border-t border-white/[0.05] transition-all duration-300 ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
          <div className="px-5 py-6 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="space-y-1">
                  <Link href={link.href} className="block px-4 py-3 text-[16px] font-medium text-white rounded-xl hover:bg-white/[0.04]" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                  <div className="pl-4 space-y-0.5">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-[14px] text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="block px-4 py-3 text-[16px] font-medium text-white rounded-xl hover:bg-white/[0.04]" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 px-4">
              <Button href="/book-demo" className="w-full justify-center">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
