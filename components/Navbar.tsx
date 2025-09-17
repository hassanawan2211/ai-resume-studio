"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  Menu, X, FileText, LayoutTemplate, Home, 
  Info, BarChart2, ChevronDown, User, LogOut, Settings 
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { href: "/", label: "Home", icon: Home },
    { 
      href: "/builder", 
      label: "Builder", 
      icon: FileText,
      dropdown: [
        { href: "/builder/create", label: "Create New" },
        { href: "/builder/my-resumes", label: "My Resumes" },
        { href: "/builder/examples", label: "Examples" },
      ]
    },
    { 
      href: "/templates", 
      label: "Templates", 
      icon: LayoutTemplate,
      dropdown: [
        { href: "/templates/professional", label: "Professional" },
        { href: "/templates/modern", label: "Modern" },
        { href: "/templates/creative", label: "Creative" },
        { href: "/templates/minimalist", label: "Minimalist" },
      ]
    },
    { href: "/score-checker", label: "Score Checker", icon: BarChart2 },
    { href: "/about", label: "About", icon: Info },
  ];

  const userMenuItems = [
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/logout", label: "Logout", icon: LogOut },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center text-2xl font-bold text-blue-700 transition hover:text-blue-800"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg mr-2">
              <FileText size={24} />
            </div>
            AI Resume Studio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <div key={link.href} className="relative" ref={dropdownRef}>
                {link.dropdown ? (
                  <div 
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer transition font-medium"
                    onClick={() => setActiveDropdown(activeDropdown === link.href ? null : link.href)}
                  >
                    <link.icon size={18} className="mr-1" />
                    {link.label}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform ${activeDropdown === link.href ? 'rotate-180' : ''}`} 
                    />
                  </div>
                ) : (
                  <Link 
                    href={link.href}
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition font-medium"
                  >
                    <link.icon size={18} className="mr-1" />
                    {link.label}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-md font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg px-4 py-4">
          <div className="space-y-2">
            {links.map((link) => (
              <div key={link.href}>
                <Link 
                  href={link.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon size={18} className="mr-3" />
                  {link.label}
                </Link>
                
                {/* Mobile Dropdown Items */}
                {link.dropdown && (
                  <div className="ml-8 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <Link
                href="/login"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-3 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}