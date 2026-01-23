import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#destinations", label: "Destinations" },
        { href: "#success", label: "Success Stories" },
    ];

    const destinations = [
        { href: "#destinations", label: "Study in Italy" },
        { href: "#destinations", label: "Study in Lithuania" },
        { href: "#services", label: "Scholarship 2026" },
        { href: "#services", label: "Visa Guidance" },
    ];

    return (
        <footer id="contact" style={{ backgroundColor: '#0F172A', color: 'white' }}>
            {/* Contact CTA Section */}
            <div
                style={{
                    background: 'linear-gradient(to right, #F59E0B, #D97706)',
                    padding: '64px 0',
                }}
            >
                <div className="container-custom">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            gap: '24px',
                        }}
                        className="md-row"
                    >
                        <div>
                            <h3
                                style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    fontWeight: 700,
                                    color: '#0F172A',
                                    marginBottom: '8px',
                                }}
                            >
                                Ready to Start Your Journey?
                            </h3>
                            <p style={{ color: 'rgba(15, 23, 42, 0.8)', fontSize: '18px' }}>
                                Book a free consultation and take the first step towards your European education.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/8801726867991"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px 32px',
                                backgroundColor: '#0F172A',
                                color: 'white',
                                fontWeight: 700,
                                borderRadius: '14px',
                                textDecoration: 'none',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                transition: 'all 0.2s',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            💬 Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div style={{ padding: '80px 0' }}>
                <div className="container-custom">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '48px',
                        }}
                    >
                        {/* Brand Column */}
                        <div>
                            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', marginBottom: '24px' }}>
                                <span style={{ fontSize: '24px', fontWeight: 700, color: 'white' }}>NextUp</span>
                                <span style={{ fontSize: '24px', fontWeight: 700, color: '#F59E0B' }}>Mentor</span>
                            </Link>
                            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7, marginBottom: '24px' }}>
                                Your trusted partner for studying in Europe. Specialized guidance for Italy & Lithuania since 2019.
                            </p>
                            {/* Social Links */}
                            <div style={{ display: 'flex', gap: '12px' }}>
                                {['📘', '📷', '💼', '📺'].map((icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '18px',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: 'white' }}>Quick Links</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {quickLinks.map((link) => (
                                    <li key={link.href} style={{ marginBottom: '12px' }}>
                                        <a
                                            href={link.href}
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.6)',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                transition: 'color 0.2s',
                                            }}
                                        >
                                            → {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Destinations */}
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: 'white' }}>Explore</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {destinations.map((link, index) => (
                                    <li key={index} style={{ marginBottom: '12px' }}>
                                        <a
                                            href={link.href}
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.6)',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                transition: 'color 0.2s',
                                            }}
                                        >
                                            → {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: 'white' }}>Contact Us</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '16px' }}>
                                    <a
                                        href="tel:+8801726867991"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        📞 <span>+880 1726-867991</span>
                                    </a>
                                </li>
                                <li style={{ marginBottom: '16px' }}>
                                    <a
                                        href="mailto:nextupmentor@gmail.com"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        ✉️ <span>nextupmentor@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                        }}
                                    >
                                        📍 <span>Bangladesh</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div
                style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '32px 0',
                }}
            >
                <div className="container-custom">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                            textAlign: 'center',
                            color: 'rgba(255, 255, 255, 0.4)',
                            fontSize: '14px',
                        }}
                    >
                        <p>© 2026 NextUp Mentor. All rights reserved.</p>
                        <p style={{ fontStyle: 'italic' }}>"Guided by experience, not with promises."</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
