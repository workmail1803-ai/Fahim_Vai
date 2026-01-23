export default function Hero() {
    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px',
                backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            {/* Content */}
            <div className="container-custom" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div style={{ maxWidth: '720px' }}>
                    {/* Badge */}
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            marginBottom: '24px',
                        }}
                    >
                        <span
                            className="animate-pulse"
                            style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: '#F59E0B',
                                borderRadius: '50%'
                            }}
                        />
                        <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '14px', fontWeight: 500 }}>
                            Admissions Open for 2026-2027
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontWeight: 700,
                            color: 'white',
                            marginBottom: '24px',
                            lineHeight: 1.1,
                        }}
                    >
                        Your Gateway to{" "}
                        <span style={{ color: '#F59E0B' }}>Studying in Europe</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        style={{
                            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                            color: 'rgba(255, 255, 255, 0.8)',
                            marginBottom: '32px',
                            maxWidth: '600px',
                            lineHeight: 1.7,
                        }}
                    >
                        Specialized guidance for{" "}
                        <span style={{ color: 'white', fontWeight: 600 }}>Italy</span> &{" "}
                        <span style={{ color: 'white', fontWeight: 600 }}>Lithuania</span>. We are
                        guided by experience, not with promises.
                    </p>

                    {/* Stats Row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
                        {[
                            { icon: "✓", text: "500+ Students Placed" },
                            { icon: "✓", text: "98% Visa Success" },
                            { icon: "✓", text: "5+ Years Experience" },
                        ].map((stat, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ color: '#F59E0B', fontSize: '18px', fontWeight: 700 }}>{stat.icon}</span>
                                <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '14px' }}>{stat.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        <a href="#contact" className="btn-primary">
                            ✓ Check Eligibility
                        </a>
                        <a href="#services" className="btn-secondary">
                            📚 View Scholarships 2026
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <a
                    href="#services"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        textDecoration: 'none',
                    }}
                >
                    <span style={{ fontSize: '14px' }}>Scroll to explore</span>
                    <span className="animate-bounce" style={{ fontSize: '24px' }}>↓</span>
                </a>
            </div>
        </section>
    );
}
