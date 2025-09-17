"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, FileText, LayoutTemplate, Home, Info } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold text-blue-600">
            AI Resume Studio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition">
              <Home size={18} /> Home
            </Link>
            <Link href="/builder" className="flex items-center gap-2 hover:text-blue-600 transition">
              <FileText size={18} /> Builder
            </Link>
            <Link href="/templates" className="flex items-center gap-2 hover:text-blue-600 transition">
              <LayoutTemplate size={18} /> Templates
            </Link>
            <Link href="/about" className="flex items-center gap-2 hover:text-blue-600 transition">
              <Info size={18} /> About
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            <Home size={18} /> Home
          </Link>
          <Link href="/builder" className="flex items-center gap-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            <FileText size={18} /> Builder
          </Link>
          <Link href="/templates" className="flex items-center gap-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            <LayoutTemplate size={18} /> Templates
          </Link>
          <Link href="/about" className="flex items-center gap-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            <Info size={18} /> About
          </Link>
        </div>
      )}
    </nav>
  );
}
