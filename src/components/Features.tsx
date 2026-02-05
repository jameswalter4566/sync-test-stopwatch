import { useState } from 'react';

export function Features() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features = [
    {
      id: '1',
      icon: '⚡',
      title: 'Instant Response',
      description: 'Lightning-fast start, stop, and reset with zero lag. Built for precise timing when milliseconds matter.',
    },
    {
      id: '2',
      icon: '🎯',
      title: 'Precision Timing',
      description: 'Accurate to the hundredth of a second with reliable performance across all devices and browsers.',
    },
    {
      id: '3',
      icon: '🎨',
      title: 'Clean Interface',
      description: 'Beautifully minimal design that focuses on functionality. No clutter, just pure timing excellence.',
    },
    {
      id: '4',
      icon: '📱',
      title: 'Works Everywhere',
      description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile devices.',
    },
  ];

  return (
    <section style={{
      padding: '120px 24px',
      background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.02) 50%, transparent 100%)',
      position: 'relative',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Built for Simplicity
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Everything you need in a stopwatch timer, nothing you don't. 
            Clean, fast, and reliable timing at your fingertips.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '32px',
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '40px 32px',
                background: hoveredId === feature.id
                  ? 'rgba(59, 130, 246, 0.08)'
                  : 'rgba(255, 255, 255, 0.02)',
                border: '1px solid',
                borderColor: hoveredId === feature.id
                  ? 'rgba(59, 130, 246, 0.3)'
                  : 'rgba(255, 255, 255, 0.06)',
                borderRadius: '20px',
                transform: hoveredId === feature.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredId === feature.id
                  ? '0 20px 40px rgba(59, 130, 246, 0.1), 0 0 30px rgba(59, 130, 246, 0.05)'
                  : '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                transform: hoveredId === feature.id ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#fff',
                margin: '0 0 16px',
                lineHeight: 1.3,
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#9ca3af',
                margin: 0,
                lineHeight: 1.6,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '48px 32px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 16px',
          }}>
            Ready to Start Timing?
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#9ca3af',
            margin: '0 0 32px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Join thousands who trust Project for their timing needs. 
            Simple, reliable, and always ready when you are.
          </p>
          <button style={{
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}>
            Launch Timer Now
          </button>
        </div>
      </div>
    </section>
  );
}