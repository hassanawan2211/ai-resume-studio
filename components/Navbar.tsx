"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, FileText, LayoutTemplate, Home, Info, BarChart2 } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "/", label: "Home", icon: Home },
        { href: "/builder", label: "Builder", icon: FileText },
        { href: "/templates", label: "Templates", icon: LayoutTemplate },
        { href: "/score-checker", label: "Score Checker", icon: BarChart2 },
        { href: "/about", label: "About", icon: Info },
    ];

    return (
        <nav
            className={`fixed w-full top-0 left-0 z-50 transition-all ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl font-extrabold text-blue-600">
                        AI Resume Studio
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link key={link.href} href={link.href} className="flex items-center gap-2 hover:text-blue-600 transition">
                                    <Icon size={18} /> {link.label}
                                </Link>
                            );
                        })}
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
                    {links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
                                <Icon size={18} /> {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
