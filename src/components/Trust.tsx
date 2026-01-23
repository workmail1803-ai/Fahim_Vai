export default function Trust() {
    const stats = [
        { value: "5+", label: "Years Experience", icon: "⏱️" },
        { value: "98%", label: "Visa Success Rate", icon: "✓" },
        { value: "500+", label: "Students Placed", icon: "👥" },
        { value: "100+", label: "Partner Universities", icon: "🎓" },
    ];

    return (
        <section
            id="success"
            style={{
                padding: '100px 0',
                backgroundColor: '#0F172A',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
                {/* Quote */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#F59E0B',
                            borderRadius: '20px',
                            marginBottom: '32px',
                            fontSize: '40px',
                            boxShadow: '0 10px 40px rgba(245, 158, 11, 0.3)',
                        }}
                    >
                        "
                    </div>
                    <blockquote
                        style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                            fontWeight: 700,
                            color: 'white',
                            marginBottom: '24px',
                            maxWidth: '900px',
                            margin: '0 auto 24px',
                            lineHeight: 1.3,
                        }}
                    >
                        "Guided by experience,{" "}
                        <span style={{ color: '#F59E0B' }}>not with promises</span>"
                    </blockquote>
                    <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '18px' }}>
                        Our commitment to transparent, experience-based guidance sets us apart
                    </p>
                </div>

                {/* Stats Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: 'center',
                                padding: '40px 24px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s',
                            }}
                        >
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '56px',
                                    height: '56px',
                                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                                    color: '#F59E0B',
                                    borderRadius: '14px',
                                    marginBottom: '16px',
                                    fontSize: '24px',
                                }}
                            >
                                {stat.icon}
                            </div>
                            <div
                                style={{
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    fontWeight: 700,
                                    color: 'white',
                                    marginBottom: '8px',
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', fontWeight: 500 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
