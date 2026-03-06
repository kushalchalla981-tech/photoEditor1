import React from 'react';

export default function AIPanel({ onAnalyze, loading, result, error, applied, onApply }) {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      {/* Header card */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1610 0%, #141410 100%)',
        border: '1px solid #2a2418',
        borderRadius: 12,
        padding: 16,
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: '#c9a84c', marginBottom: 6 }}>
          ✦ AI Enhancement
        </div>
        <div style={{ fontSize: 11, color: '#666', lineHeight: 1.65, fontWeight: 300 }}>
          Claude analyzes your photo and recommends optimal adjustments for brightness, contrast, color balance, and more.
        </div>
      </div>

      {/* Analyze button */}
      <button
        onClick={onAnalyze}
        disabled={loading}
        style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%)',
          border: '1px solid rgba(201,168,76,0.4)',
          color: loading ? '#7a6530' : '#c9a84c',
          borderRadius: 10,
          cursor: loading ? 'not-allowed' : 'pointer',
          padding: '12px 20px',
          width: '100%',
          fontSize: 13,
          fontFamily: "'DM Sans', system-ui",
          fontWeight: 500,
          letterSpacing: '0.05em',
          transition: 'all 0.25s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.12) 100%)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(201,168,76,0.15)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {loading ? (
          <>
            <div style={{
              width: 14, height: 14,
              border: '2px solid rgba(201,168,76,0.3)',
              borderTopColor: '#c9a84c',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              flexShrink: 0,
            }} />
            Analyzing photo…
          </>
        ) : (
          <><span style={{ fontSize: 16 }}>✦</span> Analyze &amp; Enhance</>
        )}
      </button>

      {/* Error */}
      {error && (
        <div style={{
          background: '#1a1010', border: '1px solid #3a1818',
          borderRadius: 10, padding: 14, fontSize: 12, color: '#ff7b7b',
          lineHeight: 1.5,
        }}>
          {error}
        </div>
      )}

      {/* Result cards */}
      {result && !error && (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* Scene */}
          <Card title="Scene Analysis">
            {result.mood && (
              <span style={{
                display: 'inline-block', marginBottom: 8,
                background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: 20, padding: '2px 10px', fontSize: 10,
                color: '#c9a84c', letterSpacing: '0.06em', fontWeight: 500,
              }}>
                {result.mood}
              </span>
            )}
            <div style={{ fontSize: 12, color: '#aaa', lineHeight: 1.65, fontWeight: 300 }}>
              {result.description}
            </div>
          </Card>

          {/* Issues */}
          {result.issues?.length > 0 && (
            <Card title="Issues Detected">
              {result.issues.map((issue, i) => (
                <div key={i} style={{ fontSize: 11, color: '#888', display: 'flex', gap: 8, marginBottom: 5, fontWeight: 300 }}>
                  <span style={{ color: 'rgba(201,168,76,0.5)', flexShrink: 0 }}>▸</span>
                  {issue}
                </div>
              ))}
            </Card>
          )}

          {/* Suggested Adjustments */}
          {result.enhancements && (
            <Card title="Suggested Adjustments">
              {Object.entries(result.enhancements).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#666', textTransform: 'capitalize' }}>{key}</span>
                  <span style={{ fontSize: 11, color: '#c9a84c', fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </Card>
          )}

          {/* Apply / Applied */}
          {!applied ? (
            <button
              onClick={onApply}
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #a8892f 100%)',
                border: 'none', color: '#080808', borderRadius: 8,
                cursor: 'pointer', padding: '11px 16px', width: '100%',
                fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
                fontFamily: "'DM Sans', system-ui", transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,168,76,0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              ✦ Apply AI Enhancements
            </button>
          ) : (
            <div style={{
              textAlign: 'center', fontSize: 11, color: '#c9a84c',
              background: 'rgba(201,168,76,0.08)', borderRadius: 8,
              padding: 10, border: '1px solid rgba(201,168,76,0.25)',
            }}>
              ✓ Enhancements Applied
            </div>
          )}

          {/* Pro Tips */}
          {result.tips?.length > 0 && (
            <Card title="Pro Tips">
              {result.tips.map((tip, i) => (
                <div key={i} style={{ fontSize: 11, color: '#666', display: 'flex', gap: 8, marginBottom: 7, lineHeight: 1.55, fontWeight: 300 }}>
                  <span style={{ color: 'rgba(201,168,76,0.35)', flexShrink: 0, fontWeight: 600 }}>{i + 1}.</span>
                  {tip}
                </div>
              ))}
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={{
      background: '#141414', border: '1px solid #1e1e1e',
      borderRadius: 10, padding: 14,
    }}>
      <div style={{
        fontSize: 10, color: '#444', letterSpacing: '0.08em',
        textTransform: 'uppercase', fontWeight: 500, marginBottom: 10,
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}
