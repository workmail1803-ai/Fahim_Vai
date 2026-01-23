export default function Destinations() {
    const destinations = [
        {
            country: "Italy",
            flag: "🇮🇹",
            image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1920",
            features: [
                "World-renowned Public Universities",
                "Low/No Tuition for EU & Non-EU",
                "Schengen Zone Access",
                "Rich Cultural Heritage",
            ],
            universities: ["University of Bologna", "Sapienza University", "Politecnico di Milano"],
            highlight: "Most Popular Choice",
        },
        {
            country: "Lithuania",
            flag: "🇱🇹",
            image: "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?q=80&w=1920",
            features: [
                "Affordable Tuition Fees",
                "English-taught Programs",
                "Schengen Zone Access",
                "Growing Tech Hub",
            ],
            universities: ["Vilnius University", "Kaunas University of Technology", "Vilnius Gediminas Tech"],
            highlight: "Emerging Destination",
        },
    ];

    return (
        <section
            id="destinations"
            style={{
                padding: '100px 0',
                backgroundColor: 'white'
            }}
        >
            <div className="container-custom">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(15, 23, 42, 0.1)',
                            color: '#0F172A',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            fontSize: '14px',
                            marginBottom: '16px',
                        }}
                    >
                        Study Destinations
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            color: '#0F172A',
                            marginBottom: '16px',
                        }}
                    >
                        Your European Dream Awaits
                    </h2>
                    <p
                        style={{
                            fontSize: '18px',
                            color: '#64748B',
                            maxWidth: '640px',
                            margin: '0 auto',
                            lineHeight: 1.7,
                        }}
                    >
                        Choose from our specialized destinations. Both offer world-class
                        education and Schengen access for exploring all of Europe.
                    </p>
                </div>

                {/* Destinations Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '32px',
                    }}
                >
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="card-hover"
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                border: '1px solid #E2E8F0',
                            }}
                        >
                            {/* Image */}
                            <div
                                style={{
                                    height: '240px',
                                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url(${dest.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                }}
                            >
                                {/* Country Badge */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        left: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '8px 16px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(8px)',
                                        borderRadius: '9999px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    <span style={{ fontSize: '24px' }}>{dest.flag}</span>
                                    <span style={{ fontWeight: 700, color: '#0F172A' }}>{dest.country}</span>
                                </div>

                                {/* Highlight Badge */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        padding: '8px 16px',
                                        backgroundColor: '#F59E0B',
                                        color: '#0F172A',
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        borderRadius: '9999px',
                                        boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)',
                                    }}
                                >
                                    {dest.highlight}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '32px' }}>
                                {/* Features */}
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '12px',
                                        marginBottom: '24px',
                                    }}
                                >
                                    {dest.features.map((feature, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#22C55E', fontSize: '16px' }}>✓</span>
                                            <span style={{ fontSize: '14px', color: '#475569' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Universities */}
                                <div
                                    style={{
                                        borderTop: '1px solid #E2E8F0',
                                        paddingTop: '24px',
                                    }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: 700,
                                            color: '#94A3B8',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        Top Universities
                                    </h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {dest.universities.map((uni, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    padding: '8px 14px',
                                                    backgroundColor: '#F1F5F9',
                                                    color: '#334155',
                                                    borderRadius: '9999px',
                                                    fontSize: '13px',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {uni}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    style={{
                                        marginTop: '24px',
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        padding: '16px 24px',
                                        backgroundColor: '#0F172A',
                                        color: 'white',
                                        fontWeight: 700,
                                        borderRadius: '14px',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    Explore {dest.country} Programs →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
