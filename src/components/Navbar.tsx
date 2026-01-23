"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#destinations", label: "Destinations" },
        { href: "#success", label: "Success Stories" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
        >
            <div className="container-custom">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
                    {/* Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                        <span style={{ fontSize: '24px', fontWeight: 700, color: '#0F172A' }}>NextUp</span>
                        <span style={{ fontSize: '24px', fontWeight: 700, color: '#475569' }}>Mentor</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div style={{ display: 'none' }} className="md-flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    color: '#475569',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    padding: '8px 16px',
                                    transition: 'color 0.2s',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Nav - visible on larger screens */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '32px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '24px',
                            }}
                            className="hidden-mobile"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        color: '#475569',
                                        fontWeight: 500,
                                        fontSize: '15px',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.color = '#0F172A'}
                                    onMouseOut={(e) => e.currentTarget.style.color = '#475569'}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                backgroundColor: '#F59E0B',
                                color: '#0F172A',
                                fontWeight: 600,
                                fontSize: '15px',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 6px rgba(245, 158, 11, 0.25)',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#D97706';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = '#F59E0B';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            📞 Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
