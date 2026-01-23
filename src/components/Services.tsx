export default function Services() {
    const services = [
        {
            icon: "🎓",
            title: "University Admission",
            description: "Complete guidance for Bachelor's & Master's programs at top European universities in Italy and Lithuania.",
            highlight: "100+ Partner Universities",
        },
        {
            icon: "🏆",
            title: "Scholarship Support",
            description: "Expert assistance in finding and applying for 2026-2027 scholarships including government-funded programs.",
            highlight: "2026-2027 Scholarships",
        },
        {
            icon: "📋",
            title: "Visa Guidance",
            description: "Step-by-step support for Schengen visa processing with high success rate and document preparation.",
            highlight: "98% Success Rate",
        },
        {
            icon: "✈️",
            title: "Pre-Departure Briefing",
            description: "Comprehensive preparation including accommodation guidance, travel tips, and cultural orientation.",
            highlight: "Complete Support",
        },
    ];

    return (
        <section
            id="services"
            style={{
                padding: '100px 0',
                backgroundColor: '#F8FAFC'
            }}
        >
            <div className="container-custom">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            color: '#D97706',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            fontSize: '14px',
                            marginBottom: '16px',
                        }}
                    >
                        Our Services
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            color: '#0F172A',
                            marginBottom: '16px',
                        }}
                    >
                        Comprehensive Study Abroad Support
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
                        From university selection to landing in Europe, we guide you through
                        every step of your educational journey.
                    </p>
                </div>

                {/* Services Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card-hover"
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
                                border: '1px solid #E2E8F0',
                            }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    backgroundColor: '#0F172A',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '24px',
                                    fontSize: '28px',
                                }}
                            >
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: '#0F172A',
                                    marginBottom: '12px',
                                    fontFamily: 'inherit',
                                }}
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    color: '#64748B',
                                    marginBottom: '16px',
                                    fontSize: '15px',
                                    lineHeight: 1.7,
                                }}
                            >
                                {service.description}
                            </p>

                            {/* Highlight Badge */}
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: '#D97706',
                                }}
                            >
                                ⭐ {service.highlight}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
