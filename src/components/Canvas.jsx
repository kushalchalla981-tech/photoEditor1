import React from 'react';
import DropZone from './DropZone.jsx';

export default function Canvas({ image, filterStr, transform, aiApplied, zoom, onZoomIn, onZoomOut, onZoomReset, onFile }) {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#0c0c0c',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(#191919 1px, transparent 1px), linear-gradient(90deg, #191919 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {!image ? (
        <DropZone onFile={onFile} />
      ) : (
        <div style={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={image}
            alt="Editing"
            style={{
              maxWidth: '100%',
              maxHeight: 'calc(100vh - 180px)',
              objectFit: 'contain',
              filter: filterStr,
              transform,
              transition: 'filter 0.1s ease, transform 0.3s ease',
              borderRadius: 4,
              boxShadow: '0 20px 80px rgba(0,0,0,0.85)',
              display: 'block',
            }}
          />

          {/* AI applied badge */}
          {aiApplied && (
            <div
              className="fade-in"
              style={{
                position: 'absolute', top: 14, right: 14,
                background: '#c9a84c', color: '#080808',
                padding: '3px 10px', borderRadius: 20,
                fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
                userSelect: 'none',
              }}
            >
              ✦ AI ENHANCED
            </div>
          )}
        </div>
      )}

      {/* Zoom controls */}
      {image && (
        <div style={{
          position: 'absolute', bottom: 20,
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 0, alignItems: 'center',
          background: '#111', border: '1px solid #222',
          borderRadius: 20, overflow: 'hidden',
        }}>
          <ZoomBtn onClick={onZoomOut} label="−" />
          <div style={{ fontSize: 11, color: '#555', width: 44, textAlign: 'center', padding: '6px 0' }}>
            {Math.round(zoom * 100)}%
          </div>
          <ZoomBtn onClick={onZoomIn} label="+" />
          <div style={{ width: 1, height: 16, background: '#2a2a2a' }} />
          <ZoomBtn onClick={onZoomReset} label="FIT" small />
        </div>
      )}
    </div>
  );
}

function ZoomBtn({ onClick, label, small }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        color: '#666',
        padding: small ? '6px 10px' : '6px 12px',
        fontSize: small ? 9 : 14,
        cursor: 'pointer',
        fontFamily: "'DM Sans', system-ui",
        letterSpacing: small ? '0.06em' : 0,
        transition: 'color 0.15s',
        lineHeight: 1,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a84c')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
    >
      {label}
    </button>
  );
}
