import { useState } from 'react';

export function Hero() {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px',
      background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '600px',
        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Floating timer visual */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '2px solid rgba(59, 130, 246, 0.3)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#3b82f6',
        fontWeight: '700',
        animation: 'pulse 2s infinite',
      }}>
        00:00
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '900px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '100px',
          marginBottom: '32px',
          fontSize: '14px',
          color: '#60a5fa',
          fontWeight: '500',
        }}>
          ⏱️ Simple Precision Timing
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          margin: '0 0 24px',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Time Every Moment
          <br />
          Perfectly
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '20px',
          color: '#9ca3af',
          lineHeight: 1.6,
          margin: '0 0 48px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          A beautifully simple stopwatch timer designed for precision and clarity. 
          Start, stop, and reset with elegant controls that get out of your way 
          so you can focus on what matters.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onMouseEnter={() => setIsHoveredPrimary(true)}
            onMouseLeave={() => setIsHoveredPrimary(false)}
            style={{
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#fff',
              background: isHoveredPrimary
                ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: isHoveredPrimary ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: isHoveredPrimary
                ? '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)'
                : '0 10px 30px rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Start Timing ⏱️
          </button>

          <button
            onMouseEnter={() => setIsHoveredSecondary(true)}
            onMouseLeave={() => setIsHoveredSecondary(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: isHoveredSecondary ? '#60a5fa' : '#9ca3af',
              background: 'transparent',
              border: '2px solid',
              borderColor: isHoveredSecondary ? 'rgba(96, 165, 250, 0.4)' : 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            View Features
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginTop: '64px',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Precision', value: '0.01s' },
            { label: 'Responsive', value: '100%' },
            { label: 'Simple', value: '3 Buttons' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#3b82f6',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}